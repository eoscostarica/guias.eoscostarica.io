---
id: instalacion-de-red-privada
title: Instalación Red Privada EOSIO
sidebar_label: Instalación Red Privada EOSIO
description: Instalación de redes privadas EOSIO
keywords: [Instalación Red Privada EOSIO, redes EOSIO, Qué es EOS, Qué es EOSIO, EOS, EOSIO]
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Tutorial de Configuración de una Red Privada
Se pueden diseñar varias topologías en el sentido de cantidad de nodos o redundancia de los datos, sin embargo, para la practicidad de este tutorial, se utiliza la siguiente topología como referencia principal:
<p style={{ align: "center" }}>
  <img alt="Topología inicial" src={ useBaseUrl( '/img/private-network-installation-tutorial/initial-topology.webp' )} width="100%" />
</p>

## Requisitos Previos de Software
A la hora de configurar una red privada EOSIO hay algunos requisitos de instalación de software:
1. Instalación de los binarios precompilados de EOSIO
1. Instalación de los binarios EOSIO.CDT

*Además, estamos utilizando Ubuntu 18.04 LTS, pero si quieres utilizar macOS u otro sistema operativo compatible, echa un vistazo a [EOSIO releases](https://github.com/EOSIO/eos/releases)*

### Instalación de los Binarios Pre-compilados de EOSIO
Ejecute los siguientes comandos para instalar los binarios precompilados de EOSIO:
```bash
$ wget https://github.com/eosio/eos/releases/download/v2.0.9/eosio_2.0.9-1-ubuntu-18.04_amd64.deb
$ sudo apt install ./eosio_2.0.9-1-ubuntu-18.04_amd64.deb
```
Una vez instalados los binarios de EOSIO; nodeos, una configuración de blockchain desde cero e interacciones con redes P2P son algunas de las funcionalidades disponibles que ofrece el protocolo.
> Para desinstalar EOSIO ejecute `$ sudo apt remove eosio`
### Instalación de los Binarios EOSIO.CDT (Contract Development Toolkit)
EOSIO.CDT es un kit de herramientas que facilita el desarrollo de contratos inteligentes en una red de blockchain EOSIO. Para instalar EOSIO.CDT v1.6.3 ejecute los siguientes comandos:
```bash
$ wget https://github.com/eosio/eosio.cdt/releases/download/v1.6.3/eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
$ sudo apt install ./eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
```
## Configuración del Nodo Génesis
Antes de configurar el nodo génesis, es necesario crear un directorio llamado `~/biosboot/genesis`, esto debido a las particularidades del protocolo. Así que, para esto ejecute lo siguiente:
```bash
$ mkdir ~/biosboot
$ mkdir ~/biosboot/genesis
```
Ahora, crea un archivo llamado `genesis.json` en el directorio `~/biosboot/`, para ello ejecuta el siguiente comando para crear y editar el archivo:
```bash
$ nano ~/biosboot/genesis.json
```
Copie y pegue el siguiente contenido en el archivo creado anteriormente:
```json
{
  "initial_timestamp": "2018-12-05T08:55:11.000",
  "initial_key": "EOS_PUB_DEV_KEY",
  "initial_configuration": {
    "max_block_net_usage": 1048576,
    "target_block_net_usage_pct": 1000,
    "max_transaction_net_usage": 524288,
    "base_per_transaction_net_usage": 12,
    "net_usage_leeway": 500,
    "context_free_discount_net_usage_num": 20,
    "context_free_discount_net_usage_den": 100,
    "max_block_cpu_usage": 100000,
    "target_block_cpu_usage_pct": 500,
    "max_transaction_cpu_usage": 50000,
    "min_transaction_cpu_usage": 100,
    "max_transaction_lifetime": 3600,
    "deferred_trx_expiration_window": 600,
    "max_transaction_delay": 3888000,
    "max_inline_action_size": 4096,
    "max_inline_action_depth": 4,
    "max_authority_depth": 6
  },
  "initial_chain_id": "0000000000000000000000000000000000000000000000000000000000000000"
}
```
> Esto puede ser cambiado más adelante utilizando la función privilegiada `set_param`. Puedes ver más en nuestras guías [Funciones Importantes en EOSIO](https://guias.eoscostarica.io/docs/aprender-eosio/funciones-importantes#docsNav)

## Iniciar el Servicio nodeos
Antes de iniciar el servicio nodeos, es necesario crear el archivo `genesis_start.sh`. Para ello, ejecute los siguientes comandos:
1. Cree el archivo
    ```bash
    $ cd ~/biosboot/genesis
    $ nano genesis_start.sh
    ```
1. Pegue el siguiente contenido en el archivo `genesis_start.sh`:
    ```bash
    #!/bin/bash
    DATADIR="./blockchain"

    if [ ! -d $DATADIR ]; then 	mkdir -p $DATADIR;
    fi

    nodeos \
      --genesis-json $DATADIR"/../../genesis.json" \
      --signature-provider EOS_PUB_DEV_KEY=KEY:EOS_PRIV_DEV_KEY \
      --plugin eosio::producer_plugin \
      --plugin eosio::producer_api_plugin \
      --plugin eosio::chain_plugin \
      --plugin eosio::chain_api_plugin \
      --plugin eosio::http_plugin \
      --plugin eosio::history_api_plugin \
      --plugin eosio::history_plugin \
      --data-dir $DATADIR"/data" \
      --blocks-dir $DATADIR"/blocks" \
      --config-dir $DATADIR"/config" \
      --producer-name eosio \
      --http-server-address IP_NODO_GENESIS:8888 \
      --p2p-listen-endpoint IP_NODO_GENESIS:9010 \
      --access-control-allow-origin=* \
      --contracts-console \
      --http-validate-host=false \
      --verbose-http-errors \
      --enable-stale-production \
      --p2p-peer-address IP_PRODUCTOR1:9011 \
      --p2p-peer-address IP_PRODUCTOR2:9012 \
      --p2p-peer-address IP_PRODUCTOR2:9013 \
    >> $DATADIR"/nodeos.log" 2>&1 & \
    echo $! > $DATADIR"/eosd.pid"
    ```
    > Recuerde reemplazar `EOS_PUB_DEV_KEY` y `EOS_PRIV_DEV_KEY` con el par de claves generado anteriormente.
1. Por último, asigne permiso de ejecución al script:
    ```bash
    $ cd ~/biosboot/genesis/
    $ chmod 755 genesis_start.sh
    $ ./genesis_start.sh
    ```
    Una vez ejecutado el comando anterior, el nodo génesis que llevará **eosio** como nombre podrá:
1. Producir bloques
1. Escuchar peticiones HTTP en `IP_NODO_GENESIS:8888`.
1. Escuchar solicitudes de conexión con otros nodos en `IP_NODO_GENESIS:9010`.
1. Imprimir la salida de los contratos inteligentes en el terminal

## Registros del Servicio nodeos
Puedes inspeccionar los registros de servicios de nodeos con los siguientes comandos:
```bash
$ cd ~/biosboot/genesis/
$ tail -f ./blockchain/nodeos.log
``` 
> Para salir del modo de impresión de registros, pulse CTRL+C.

## Configuración y Compilación de `eosio.contracts`
Es necesario instalar la última versión de `eosio.contracts` junto con la versión **v1.8.0**. Para facilitar la comprensión de los pasos aquí descritos, la última versión será referida como `EOSIO_CONTRACTS_DIRECTORY` y la `v1.8.0` como `EOSIO_OLD_CONTRACTS_DIRECTORY`.
Los siguientes pasos de instalación deben seguirse en el orden en que aparecen.
1. Clone y compile los `eosio.contracts`:
    ```bash
    $ cd ~
    $ git clone https://github.com/EOSIO/eosio.contracts.git
    $ cd ./eosio.contracts/
    $ ./build.sh
    $ cd ./build/contracts/
    ```
1. Clone e instale `eosio.cdt` `v1.6.3`:
    ```bash
    $ wget https://github.com/eosio/eosio.cdt/releases/download/v1.6.3/eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
    $ sudo apt install ./eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
    ```
1. Clone y compile `eosio.contracts` `v1.8.0`:
    ```bash
    $ cd ~
    $ git clone https://github.com/EOSIO/eosio.contracts.git eosio.contracts-1.8.x
    $ cd ./eosio.contracts-1.8.x/
    $ git checkout release/1.8.x
    $ ./build.sh
    $ cd ./build/contracts/
    ```
## Despliegue del Contrato `eosio.bios`
### Activar `PREACTIVATE_FEATURE`
Debido a las actualizaciones introducidas en la v1.8 y v2.0, es necesario activar una característica del protocolo llamada PREACTIVATE_FEATURE. Para activar esta característica, ejecute el siguiente comando:
```bash
$ curl --request POST \
	--url http://IP_NODO_GENESIS:8888/v1/producer/schedule_protocol_feature_activations \
	-d '{"protocol_features_to_activate": ["0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd"]}' 
```
### Despliegue de la Versión **Antigua** de los Contratos
Ahora es necesario desplegar la versión antigua de los contratos inteligentes (`EOSIO_OLD_CONTRACTS_DIRECTORY`), para ello ejecuta el siguiente comando:
```bash
$ cleos set contract eosio EOSIO_OLD_CONTRACTS_DIRECTORY/eosio.bios/
```
**Salida de consola esperada**
```bash 
Reading WAST/WASM from /users/documents/eos/build/contracts/eosio.bios/eosio.bios.wasm...
Using already assembled WASM...
Publishing contract...
executed transaction: 2150ed87e4564cd3fe98ccdea841dc9ff67351f9315b6384084e8572a35887cc  39968 bytes  4395 us
#         eosio <= eosio::setcode               {"account":"eosio","vmtype":0,"vmversion":0,"code":"0061736d0100000001be023060027f7e0060067f7e7e7f7f...
#         eosio <= eosio::setabi                {"account":"eosio","abi":{"types":[],"structs":[{"name":"buyrambytes","base":"","fields":[{"name":"p...
```
Ahora que se ha desplegado la versión antigua de los contratos, también es necesario activar las características especiales que se recomiendan para las redes basadas en el protocolo EOSIO. Para activar estas características, ejecute los siguientes comandos:
```bash
# GET_SENDER
cleos push action eosio activate '["f0af56d2c5a48d60a4a5b5c903edfb7db3a736a94ed589d0b797df33ff9d3e1d"]' -p eosio

# FORWARD_SETCODE
cleos push action eosio activate '["2652f5f96006294109b3dd0bbde63693f55324af452b799ee137a81a905eed25"]' -p eosio

# ONLY_BILL_FIRST_AUTHORIZER
cleos push action eosio activate '["8ba52fe7a3956c5cd3a656a3174b931d3bb2abb45578befc59f283ecd816a405"]' -p eosio

# RESTRICT_ACTION_TO_SELF
cleos push action eosio activate '["ad9e3d8f650687709fd68f4b90b41f7d825a365b02c23a636cef88ac2ac00c43"]' -p eosio

# DISALLOW_EMPTY_PRODUCER_SCHEDULE
cleos push action eosio activate '["68dcaa34c0517d19666e6b33add67351d8c5f69e999ca1e37931bc410a297428"]' -p eosio

 # FIX_LINKAUTH_RESTRICTION
cleos push action eosio activate '["e0fb64b1085cc5538970158d05a009c24e276fb94e1a0bf6a528b48fbc4ff526"]' -p eosio

 # REPLACE_DEFERRED
cleos push action eosio activate '["ef43112c6543b88db2283a2e077278c315ae2c84719a8b25f25cc88565fbea99"]' -p eosio

# NO_DUPLICATE_DEFERRED_ID
cleos push action eosio activate '["4a90c00d55454dc5b059055ca213579c6ea856967712a56017487886a4d4cc0f"]' -p eosio

# ONLY_LINK_TO_EXISTING_PERMISSION
cleos push action eosio activate '["1a99a59d87e06e09ec5b028a9cbb7749b4a5ad8819004365d02dc4379a8b7241"]' -p eosio

# RAM_RESTRICTIONS
cleos push action eosio activate '["4e7bf348da00a945489b2a681749eb56f5de00b900014e137ddae39f48f69d67"]' -p eosio

# WEBAUTHN_KEY
cleos push action eosio activate '["4fca8bd82bbd181e714e283f83e1b45d95ca5af40fb89ad3977b653c448f78c2"]' -p eosio

# WTMSIG_BLOCK_SIGNATURES
cleos push action eosio activate '["299dcb6af692324b899b39f16d5a530a33062804e41f09dc97e9f156b4476707"]' -p eosio
```
### Desplegar la Última Versión de los Contratos
Una vez desplegada la versión antigua de los contratos y activadas las características, se procede a desplegar la versión reciente de los contratos:
```bash
$ cleos -U http://IP_NODO_GENESIS:8888 set contract eosio.bios EOSIO_CONTRACTS_DIRECTORY/eosio.bios/
```
**Salida esperada de consola:**
```bash
Reading WAST/WASM from ·/users/documents/eos/contracts/eosio.bios/eosio.bios.wasm...
Using already assembled WASM...
Publishing contract...
executed transaction: 17fa4e06ed0b2f52cadae2cd61dee8fb3d89d3e46d5b133333816a04d23ba991  8024 bytes  974 us
#         eosio <= eosio::setcode               {"account":"eosio.bios","vmtype":0,"vmversion":0,"code":"0061736d01000000017f1560037f7e7f0060057f7e...
#         eosio <= eosio::setabi                {"account":"eosio.bios","abi":{"types":[],"structs":[{"name":"transfer","base":"","fields":[{"name"...
```
## Nodos Productores de Bloques: Configuración y Ejecución
Debemos crear los archivos de configuración para cada productor de bloques en cada servidor. Dado que en la [topología](#tutorial-de-configuración-de-una-red-privada) se han concebido tres productores de bloques, vamos a proceder a crear sus archivos correspondientes. Para ello, ejecute los siguientes comandos:
```bash
$ cd ~
$ mkdir productor1

$ touch ~/productor1/config.ini
$ touch ~/productor1/genesis.json
$ touch ~/productor1/start.sh
```
Una vez creados los archivos, copie el contenido del fragmento de código en cada archivo correspondiente y repita el proceso para cada directorio en cada servidor (cambie el nombre del directorio según el nodo):
### `config.ini`
```bash
agent-name = productor1 # CAMBIAR ESTO DE ACUERDO AL NOMBRE DEL NODO

# PLUGINS
plugin = eosio::chain_plugin
plugin = eosio::chain_api_plugin
plugin = eosio::http_plugin
plugin = eosio::producer_plugin
plugin = eosio::producer_api_plugin
# CHAIN 
chain-state-db-size-mb = 16384
reversible-blocks-db-size-mb = 512
contracts-console = true
abi-serializer-max-time-ms = 2000
wasm-runtime = wabt
enable-stale-production = false
pause-on-startup = false
max-irreversible-block-age = -1
txn-reference-block-lag = 0

# BLOCK PRODUCER
producer-name = productor1 # CAMBIAR ESTO DE ACUERDO AL SERVIDOR

# PEERING NETWORK
p2p-server-address =  IP_PRODUCTOR1:9876     # CAMBIAR ESTO DE ACUERDO A LA IP DEL SERVIDOR
p2p-listen-endpoint = 0.0.0.0:9876
p2p-max-nodes-per-host = 150
max-clients = 150
connection-cleanup-period = 30
sync-fetch-span = 2000
allowed-connection = any

p2p-peer-address = IP_NODO_SEMILLA:PUERTO_NODO_SEMILLA
p2p-peer-address = IP_PRODUCTOR2:PUERTO_PRODUCTOR2       # CAMBIAR ESTO DE ACUERDO AL NODO
p2p-peer-address = IP_PRODUCTOR3:PUERTO_PRODUCTOR3       # CAMBIAR ESTO DE ACUERDO AL NODO
p2p-peer-address = IP_NODO_API:PUERTO_NODO_API
```
### `genesis.json`
```json
{
  "initial_timestamp": "2018-12-05T08:55:11.000",
  "initial_key": "EOS_PUB_DEV_KEY",
  "initial_configuration": {
    "max_block_net_usage": 1048576,
    "target_block_net_usage_pct": 1000,
    "max_transaction_net_usage": 524288,
    "base_per_transaction_net_usage": 12,
    "net_usage_leeway": 500,
    "context_free_discount_net_usage_num": 20,
    "context_free_discount_net_usage_den": 100,
    "max_block_cpu_usage": 100000,
    "target_block_cpu_usage_pct": 500,
    "max_transaction_cpu_usage": 50000,
    "min_transaction_cpu_usage": 100,
    "max_transaction_lifetime": 3600,
    "deferred_trx_expiration_window": 600,
    "max_transaction_delay": 3888000,
    "max_inline_action_size": 4096,
    "max_inline_action_depth": 4,
    "max_authority_depth": 6
  },
  "initial_chain_id": "0000000000000000000000000000000000000000000000000000000000000000"
}
```
### `start.sh`
```bash
#!/usr/bin/env bash
DATA_DIR="blockchain"
CONFIG_DIR="./blockchain/config"
EOS_PUB_KEY=EOS_PUB_PRODUCER1_KEY  # CAMBIAR ESTO DE ACUERDO AL NODO
EOS_PRIV_KEY=EOS_PRIV_PRODUCER1_KEY  # CAMBIAR ESTO DE ACUERDO AL NODO
echo "Starting VALIDATOR Node...";
set -e;
ulimit -n 65535
ulimit -s 64000
mkdir -p $CONFIG_DIR
cp ./config.ini $CONFIG_DIR/config.ini
pid=0;
nodeos=$"nodeos \
 --config-dir $CONFIG_DIR \
 --data-dir $DATA_DIR \
 --blocks-dir $DATA_DIR/blocks \
 --signature-provider $EOS_PUB_KEY=KEY:$EOS_PRIV_KEY" ;
term_handler() {
 if [ $pid -ne 0 ]; then
   kill -SIGTERM "$pid";
   wait "$pid";
 fi
 exit 0;
}
start_nodeos() {
 $nodeos &
 sleep 10;
 if [ -z "$(pidof nodeos)" ]; then
   $nodeos --hard-replay-blockchain &
 fi
}
start_fresh_nodeos() {
 echo 'Starting new chain from genesis JSON'
 $nodeos --delete-all-blocks --genesis-json genesis.json &
}
trap 'echo "Shutdown of EOSIO service...";kill ${!}; term_handler' 2 15;
if [ ! -d $DATA_DIR/blocks ]; then
 start_fresh_nodeos &
elif [ -d $DATA_DIR/blocks ]; then
 start_nodeos &
fi
pid="$(pidof nodeos)"
while true
do
 tail -f /dev/null & wait ${!}
done
```
Para ejecutar cada nodo es necesario entrar en el directorio, asignar permisos y ejecutar cada archivo `start.sh`:
```bash
$ chmod 755 start.sh # asigna permisos de ejecución
$ ./start.sh
```
## Crear Cuentas de Productores de Bloques
```bash
$ cleos -u http://IP_NODO_GENESIS:8888 create account eosio producer1 EOS_PUB_PRODUCER1_KEY
$ cleos -u http://IP_NODO_GENESIS:8888 create account eosio producer2 EOS_PUB_PRODUCER2_KEY
$ cleos -u http://IP_NODO_GENESIS:8888 create account eosio producer3 EOS_PUB_PRODUCER3_KEY
```

## Configurar el Schedule de los Productores
Crea el archivo `producers.json` y pega el siguiente contenido en él:
```json
{"schedule":
  [
    {
      "producer_name": "productor1", 
      "authority": [
        "block_signing_authority_v0",
        {
          "threshold": 1,
          "keys": [
            {
              "key":"EOS_PUB_PRODUCER1_KEY",
              "weight":1
            }
          ]
        }
      ]
    },
    {
      "producer_name":"productor2",
      "authority": [
        "block_signing_authority_v0",
        {
          "threshold":1,
          "keys": [
            {
              "key":"EOS_PUB_PRODUCER2_KEY",
              "weight":1
            }
          ]
        }
      ]
    },
    {
      "producer_name":"productor3",
      "authority": [
        "block_signing_authority_v0",
        {
          "threshold":1,
          "keys": [
            {
              "key":"EOS_PUB_PRODUCER3_KEY",
              "weight":1
            }
          ]
        }
      ]
    }
  ]
}
```
Ahora, ejecute el siguiente comando para establecer el *schedule*:
```bash
$ cleos -u http://IP_NODO_GENESIS:8888 push action eosio setprods "producers.json" -p eosio@active
```
## Nodo API: Configuración y Ejecución
```bash
$ cd ~
$ mkdir nodo-api
$ cd nodo-api
$ touch config.ini
$ touch genesis.json
$ touch start.sh
```
Ahora copie el contenido del fragmento de código en el archivo correspondiente:
### `config.ini`
```bash
agent-name = nodo-api

# PLUGINS
plugin = eosio::chain_plugin
plugin = eosio::chain_api_plugin
plugin = eosio::http_plugin
plugin = eosio::producer_plugin
plugin = eosio::producer_api_plugin
# HTTP
access-control-allow-origin = *
http-validate-host = false
verbose-http-errors = true
http-server-address = 0.0.0.0:80

# SSL
#https-server-address = 0.0.0.0:443
#https-certificate-chain-file = ./ssl/domain.crt
#https-private-key-file = ./ssl/domain.priv.key

# CHAIN 
chain-state-db-size-mb = 16384
reversible-blocks-db-size-mb = 512
abi-serializer-max-time-ms = 2000	
contracts-console = true

# PEERING NETWORK
p2p-listen-endpoint = 0.0.0.0:9876
p2p-server-address =  IP_NODO_API:9876
p2p-max-nodes-per-host = 150
max-clients = 150
sync-fetch-span = 2000

p2p-peer-address = IP_PRODUCTOR1:PUERTO_PRODUCTOR1
p2p-peer-address = IP_PRODUCTOR2:PUERTO_PRODUCTOR2
p2p-peer-address = IP_PRODUCTOR3:PUERTO_PRODUCTOR3
p2p-peer-address = IP_NODO_SEMILLA:PUERTO_NODO_SEMILLA
```
### `genesis.json`
```json
{
 "initial_timestamp": "2018-12-05T08:55:11.000",
 "initial_key": "EOS_PUB_DEV_KEY",
 "initial_configuration": {
   "max_block_net_usage": 1048576,
   "target_block_net_usage_pct": 1000,
   "max_transaction_net_usage": 524288,
   "base_per_transaction_net_usage": 12,
   "net_usage_leeway": 500,
   "context_free_discount_net_usage_num": 20,
   "context_free_discount_net_usage_den": 100,
   "max_block_cpu_usage": 100000,
   "target_block_cpu_usage_pct": 500,
   "max_transaction_cpu_usage": 50000,
   "min_transaction_cpu_usage": 100,
   "max_transaction_lifetime": 3600,
   "deferred_trx_expiration_window": 600,
   "max_transaction_delay": 3888000,
   "max_inline_action_size": 4096,
   "max_inline_action_depth": 4,
   "max_authority_depth": 6
 },
 "initial_chain_id": "0000000000000000000000000000000000000000000000000000000000000000"
}
```
### `start.sh`
```bash
#!/usr/bin/env bash
DATA_DIR="blockchain"
CONFIG_DIR="./blockchain/config"
echo "Starting API Node...";
set -e;
ulimit -n 65535
ulimit -s 64000
mkdir -p $CONFIG_DIR
cp ./config.ini $CONFIG_DIR/config.ini
pid=0;
nodeos=$"nodeos \
 --config-dir $CONFIG_DIR \
 --data-dir $DATA_DIR \
 --blocks-dir $DATA_DIR/blocks" ;
term_handler() {
 if [ $pid -ne 0 ]; then
   kill -SIGTERM "$pid";
   wait "$pid";
 fi
 exit 0;
}
start_nodeos() {
 $nodeos &
 sleep 10;
 if [ -z "$(pidof nodeos)" ]; then
   $nodeos --hard-replay-blockchain &
 fi
}
start_fresh_nodeos() {
 echo 'Starting new chain from genesis JSON'
 $nodeos --delete-all-blocks --genesis-json genesis.json &
}
trap 'echo "Shutdown of EOSIO service...";kill ${!}; term_handler' 2 15;
if [ ! -d $DATA_DIR/blocks ]; then
 start_fresh_nodeos &
elif [ -d $DATA_DIR/blocks ]; then
 start_nodeos &
fi
pid="$(pidof nodeos)"
while true
do
 tail -f /dev/null & wait ${!}
done
```
Para iniciar el nodo, asigne permisos de ejecución a `start.sh` y ejecútelo:
```bash
$ chmod 755 start.sh
$ ./start.sh
```
## Nodo Semilla: Configuración y Ejecución
```bash
$ cd ~
$ mkdir nodo-semilla
$ touch config.ini
$ touch genesis.json
$ touch start.sh 
```
Ahora copie el contenido del fragmento de código en el archivo correspondiente:
### `config.ini`
```bash
# EOSIO Testnet SEED NODE Config file
# https://eoscostarica.io

agent-name = nodo-semilla

# PLUGINS
plugin = eosio::chain_plugin

# CHAIN 
chain-state-db-size-mb = 16384
reversible-blocks-db-size-mb = 512
contracts-console = true
abi-serializer-max-time-ms = 2000

# PEERING NETWORK
p2p-listen-endpoint = 0.0.0.0:9876
p2p-server-address = IP_NODO_SEMILLA:9876

p2p-peer-address = IP_PRODUCTOR1:PUERTO_PRODUCTOR1
p2p-peer-address = IP_PRODUCTOR2:PUERTO_PRODUCTOR2
p2p-peer-address = IP_PRODUCTOR3:PUERTO_PRODUCTOR3
p2p-peer-address = IP_NODO_API:PUERTO_NODO_API
```
### `genesis.json`
```json
{
 "initial_timestamp": "2018-12-05T08:55:11.000",
 "initial_key": "EOS_PUB_DEV_KEY",
 "initial_configuration": {
   "max_block_net_usage": 1048576,
   "target_block_net_usage_pct": 1000,
   "max_transaction_net_usage": 524288,
   "base_per_transaction_net_usage": 12,
   "net_usage_leeway": 500,
   "context_free_discount_net_usage_num": 20,
   "context_free_discount_net_usage_den": 100,
   "max_block_cpu_usage": 100000,
   "target_block_cpu_usage_pct": 500,
   "max_transaction_cpu_usage": 50000,
   "min_transaction_cpu_usage": 100,
   "max_transaction_lifetime": 3600,
   "deferred_trx_expiration_window": 600,
   "max_transaction_delay": 3888000,
   "max_inline_action_size": 4096,
   "max_inline_action_depth": 4,
   "max_authority_depth": 6
 },
 "initial_chain_id": "0000000000000000000000000000000000000000000000000000000000000000"
}
```
### `start.sh`
```bash
#!/usr/bin/env bash
echo "Starting SEED Node...";
set -e;
ulimit -n 65535
ulimit -s 64000

mkdir -p $CONFIG_DIR
cp $WORK_DIR/config.ini $CONFIG_DIR/config.ini

pid=0;

nodeos=$"nodeos \
  --config-dir $CONFIG_DIR \
  --data-dir $DATA_DIR \
  --blocks-dir $DATA_DIR/blocks" ;

term_handler() {
  if [ $pid -ne 0 ]; then
    kill -SIGTERM "$pid";
    wait "$pid";
  fi
  exit 0;
}

start_nodeos() {
  $nodeos &
  sleep 10;
  if [ -z "$(pidof nodeos)" ]; then
    $nodeos --hard-replay-blockchain &
  fi
}

start_fresh_nodeos() {
  echo 'Starting new chain from genesis JSON'
  $nodeos --delete-all-blocks --genesis-json $WORK_DIR/genesis.json &
}

trap 'echo "Shutdown of EOSIO service...";kill ${!}; term_handler' 2 15;

if [ ! -d $DATA_DIR/blocks ]; then
  start_fresh_nodeos &
elif [ -d $DATA_DIR/blocks ]; then
  start_nodeos &
fi

pid="$(pidof nodeos)"

while true
do
  tail -f /dev/null & wait ${!}
done
```
Para iniciar el nodo semilla, simplemente asigne permisos de ejecución al archivo `start.sh` y ejecútelo:
```bash
$ chmod 755 start.sh
$ ./start.sh
```
## Detener el Servicio nodeos
Crea el archivo `stop.sh` en el directorio `~/biosboot/genesis/` y copia el siguiente contenido:
```bash
#!/bin/bash
DATADIR="./blockchain/"

if [ -f $DATADIR"/eosd.pid" ]; then
    pid=`cat $DATADIR"/eosd.pid"`
    echo $pid
    kill $pid
    rm -r $DATADIR"/eosd.pid"
    echo -ne "Stopping Node"
    while true; do
        [ ! -d "/proc/$pid/fd" ] && break
        echo -ne "."
        sleep 1
    done
    echo -ne "\rNode Stopped. \n"
fi
```
Ahora puede ejecutar el archivo `stop.sh`:
```bash
$ chmod 755 stop.sh 
$ ./stop.sh
```
## Reiniciar el Servicio nodeos
Es importante tener en cuenta que una vez que el nodo está produciendo bloques no es posible reiniciar el servicio nodeos utilizando el mismo script creado en la sección [Iniciar el servicio nodeos](#iniciar-el-servicio-nodeos), ya que la base de datos del blockchain ya contiene información de la ejecución inicial. Por eso se recomienda crear un nuevo script con el nombre `start.sh`. Este archivo puede seguir utilizándose para futuros reinicios del nodo una vez que el proceso se haya detenido.
Copie y pegue el siguiente contenido en el archivo `start.sh`:
```bash
#!/bin/bash
DATADIR="./blockchain"
EOS_PUB_KEY=EOS_PUB_KEY_HERE
EOS_PRIV_KEY=EOS_PRIV_KEY_HERE
if [ ! -d $DATADIR ]; then
 mkdir -p $DATADIR;
fi
nodeos \
--signature-provider EOS_PUB_KEY=KEY:EOS_PRIV_KEY \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_api_plugin \
--plugin eosio::history_plugin \
--data-dir "blockchain/data" \
--blocks-dir $DATADIR"/data/blockchain/blocks" \
--config-dir $DATADIR"/config" \
--producer-name eosio \
--http-server-address IP_NODO_GENESIS:8888 \ # configurable
--p2p-listen-endpoint IP_NODO_GENESIS:9010 \ # configurable
--access-control-allow-origin=* \
--contracts-console \
--http-validate-host=false \
--verbose-http-errors \
--enable-stale-production \
--p2p-peer-address IP_PRODUCTOR1:PUERTO_PRODUCTOR1 \
--p2p-peer-address IP_PRODUCTOR2:PUERTO_PRODUCTOR2 \
--p2p-peer-address IP_PRODUCTOR3:PUERTO_PRODUCTOR3 \
>> $DATADIR"/nodeos.log" 2>&1 & \
echo $! > $DATADIR"/eosd.pid"
```
Ahora, asigna permisos de ejecución al archivo `start.sh` y ejecútalo:
```bash
$ chmod 755 start.sh
$ ./start.sh
```
El siguiente fragmento de código corresponde al script `hard_replay.sh` con la bandera `--hard-replay-blockchain`:
```bash
DATADIR="./blockchain"

if [ ! -d $DATADIR ]; then
  mkdir -p $DATADIR;
fi

nodeos \
--signature-provider EOS_PUB_DEV_KEY=KEY:EOS_PRIV_DEV_KEY \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_api_plugin \
--plugin eosio::history_plugin \
--data-dir $DATADIR"/data" \
--blocks-dir $DATADIR"/blocks" \
--config-dir $DATADIR"/config" \
--producer-name eosio \
--http-server-address IP_NODO_GENESIS:8888 \ # configurable
--p2p-listen-endpoint IP_NODO_GENESIS:9010 \ # configurable
--access-control-allow-origin=* \
--contracts-console \
--http-validate-host=false \
--verbose-http-errors \
--enable-stale-production \
--p2p-peer-address IP_PRODUCTOR1:PUERTO_PRODUCTOR1 \
--p2p-peer-address IP_PRODUCTOR2:PUERTO_PRODUCTOR2 \
--p2p-peer-address IP_PRODUCTOR3:PUERTO_PRODUCTOR3 \
--hard-replay-blockchain \
>> $DATADIR"/nodeos.log" 2>&1 & \
echo $! > $DATADIR"/eosd.pid"
```
> **"perhaps we need to replay"**: este error puede producirse al reiniciar nodeos debido a que falta la bandera `--hard-replay-blockchain` (parámetro que reproduce todas las transacciones del nodo génesis). Para solucionar este error, ejecute el script `hard_replay.sh`.

## Reiniciar nodeos desde Cero
Para reiniciar el servicio nodeos desde cero, crea el script `clean.sh`, copia el siguiente contenido y dale permisos de ejecución (`chmod 755 clean.sh`):
```bash
#!/bin/bash
rm -fr blockchain
ls -al
```
Si desea eliminar la configuración actual, los datos de la cadena de bloques y los archivos de registro, ejecute los siguientes comandos en el orden en que aparecen:
```bash
$ cd ~/biosboot/genesis/
$ ./stop.sh
$ ./clean.sh
$ ./genesis_start.sh
```
## Interactuar con la Red
En este punto, la red es capaz de albergar cualquier contrato. Supongamos que quieres desplegar un contrato como [easycontract](https://github.com/eoscostarica/eoscr-smart-contracts/tree/master/easycontract) el repo de ejemplo de EOS Costa Rica. Después de seguir las instrucciones especificadas allí, puede llamar a la acción `save` de easycontract de la siguiente manera:
```bash
cleos -u URL_NODO_AQUI push action easycontract save '{"date":"2021/01/10 21:01:35","filename":"ejemplo.pdf","path":"/var/www/docs"}' -p easycontract@active
```
Tras la ejecución, obtendrá una salida en el terminal.
### Obtener Datos Almacenados
```bash
cleos -u URL_NODO_AQUI get transaction ID_TRANSACCION_AQUI
```