---
id: instalacion-de-nodos
title: Instalación de Nodos
sidebar_label: Instalación de Nodos
description: Instalación de Nodos para EOSIO
keywords: [Instalación de Nodos, EOSIO, Cómo se crea un nodo, Cómo se instala un nodo, Instalar nodos]
---

# Configuración de un Nodo Productor
En EOSIO, un nodo productor y otros tipos de nodos se definen y diferencian habilitando los [Plugins de Nodeos](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/index) específicos. Por ejemplo, para definir un nodo no productor, es necesario exceptuar `producer_plugin`. Esta posibilidad de personalización permite exponer uno o varios servicios de forma pública o privada habilitando uno o varios de esos plugins.

Si estas tratando de configurar un "Full Node", puede que te resulte útil la guía [Configuración de un Nodo EOS Completo](https://eoscommunity.org/t/where-is-the-best-guide-on-setting-up-a-full-eos-node/621).

Procedamos a configurar un Nodo Productor utilizando la tecnología EOSIO. También puede encontrar más información útil sobre este tema en [Configuración del Nodo de Producción](https://developers.eos.io/manuals/eos/v2.0/nodeos/usage/node-setups/producing-node).

## Instale EOSIO desde Binarios Precompilados
Descarga la última versión de EOSIO para tu sistema operativo desde: [Github](https://github.com/EOSIO/eos/releases/tag/v2.0.6).

Por ejemplo, para ubuntu 18.04 necesitas descargar `eosio_2.0.6-1-ubuntu-18.04_amd64.deb`.

Puedes usar apt para instalarlo:

```bash
$ wget https://github.com/EOSIO/eos/releases/download/v2.1.0-rc2/eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb
$ sudo dpkg -i ./eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb
```

El comando anterior descarga todas las dependencias e instala EOSIO en `/usr/opt/eosio`.

## Configuración del Nodo
Una vez instalados los binarios pre-compilados siguiendo los comandos anteriores, vamos a crear un directorio llamado `testproducer` y los archivos `config.ini`, `genesis.json` y `start.sh` en el:
```bash
$ mkdir testproducer

$ touch ~/testproducer/config.ini
$ touch ~/testproducer/genesis.json
$ touch ~/testproducer/start.sh
```

Ahora, escribamos algo de código en esos archivos:

### `config.ini`
```ini
agent-name = testproducer

# PLUGINS
# Necesario para procesar y agregar datos de la cadena en un nodo EOSIO.
plugin = eosio::chain_plugin
# Expone la funcionalidad a la interfaz RPC API
plugin = eosio::chain_api_plugin
# Necesario para habilitar cualquier funcionalidad de la API RPC proporcionada por una instancia de nodeos o keosd.
plugin = eosio::http_plugin
# Carga la funcionalidad necesaria para que un nodo produzca bloques.
plugin = eosio::producer_plugin
# Expone una serie de endpoints para el producer_plugin a la interfaz RPC API.
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
producer-name = testproducer

# PEERING NETWORK
p2p-server-address =  TESTPRODUCER_IP:9876     # CAMBIAR ESTO SEGUN IP DEL NODO
p2p-listen-endpoint = 0.0.0.0:9876
p2p-max-nodes-per-host = 150
max-clients = 150
connection-cleanup-period = 30
sync-fetch-span = 2000
allowed-connection = any

p2p-peer-address = SEED_NODE_IP:SEED_NODE_PORT
p2p-peer-address = PEER1_NODE_IP:PEER1_NODE_PORT
p2p-peer-address = PEER2_NODE_IP:PEER2_NODE_PORT
p2p-peer-address = API_NODE_IP:API_NODE_PORT
# Puedes continuar añadiendo nods peer aquí
```

> Ten en cuenta que arriba hay elementos que deben ser reemplazados con sus valores correspondientes.

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

> Sustituye `EOS_PUB_DEV_KEY` por su valor correspondiente. Para ver cómo generar un par de claves, consulta nuestra guía [Llaves Privadas](https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas) sobre este tema.

### `start.sh`
```bash
#!/usr/bin/env bash
DATA_DIR="blockchain"
CONFIG_DIR="./blockchain/config"
EOS_PUB_KEY=EOS_PUB_KEY  #REEMPLAZA ESTO CON SU VALOR CORRESPONDIENTE
EOS_PRIV_KEY=EOS_PRIV_KEY #REEMPLAZA ESTO CON SU VALOR CORRESPONDIENTE
echo "Starting Producer Node...";
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

> Tal vez necesites asignar permisos de ejecución a `start.sh`, para ello ejecuta `$ chmod 755 start.sh`.

**Ejecute el script `start.sh`**
```bash
$ ./start.sh
```
Para una información más detallada sobre el comando anterior, por favor visite [System Regproducer](https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer).

### Crear la cuenta `testproducer`
En una red blockchain basada en EOSIO, la creación de cuentas conlleva el consumo de [RAM](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram), por lo que es necesario pagar por las nuevas cuentas. En el siguiente comando sustituye `CREATOR` por una cuenta existente y con recursos suficientes para ejecutar la operación.
```bash
$ cleos -u http://URL_NODO_DESTINO create account CREATOR testproducer EOS_PUB_KEY
```
Dependiendo de la red para la que estés configurando el nodo, puedes crear una cuenta con los siguientes enlaces:
- [Creación de cuentas en Jungle Testnet](http://monitor3.jungletestnet.io/#account)
- [Creación de cuentas en Kylin Testnet](https://kylin.eosx.io/tools/account/create)
- [Creación de cuentas en la red EOS](https://www.eosx.io/tools/account/create)

### Registrar `testproducer` como un Nodo Productor
```bash
$ cleos -u http://URL_NODO_DESTINO system regproducer testproducer EOS_PUB_KEY "www.testproducer.testlink" 0
```
Para una información más detallada sobre el comando anterior, por favor visite [System Regproducer](https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer).

Ahora, el nodo está configurado. Si configuraste este nodo para operar en una Red Privada, necesitas asegurarte de que tu nodo está incluido en la de productores. Consulta nuestra guía [Instalación de Red Privada](https://guias.eoscostarica.io/docs/tutoriales/instalacion-de-red-privada) para ver más información sobre esto.

Por otro lado, si quieres producir bloques en una red de prueba, los poseedores de tokens tienen que votar por ti para estar entre los 21 principales productores de bloques.

### Desinstalar `eosio`
Para desinstalar los binarios construidos/instalados de EOSIO y sus dependencias, ejecuta:
```bash
sudo dpkg -r eosio
```

## Iniciar un Nodo Usando un Snapshot
En algunas situaciones, es conveniente iniciar un nodo utilizando un **snapshot**, si se desea crear un estado de la red válido desde el que iniciar. Se recomienda borrar todos los datos existentes en el directorio: `~./local/share/eosio/nodeos/data/*`.

Supongamos que vamos a utilizar un **snapshot** de Jungle Testnet. Procede a ejecutar el siguiente comando:
```bash
$ wget https://backup.cryptolions.io/Jungle/snapshots/latest-snapshot.bin -P ~./local/share/eosio/nodeos/data/snapshots/
```

Ahora que el **snapshot** se ha descargado, puedes utilizar el mismo script [`start.sh`](#startsh) para iniciar el nodo, sólo tienes que eliminar la bandera `--genesis-json` en el script, por lo que la función `start_fresh_nodes` en el archivo se verá así:

```bash
start_fresh_nodeos() {
 echo 'Starting new chain from genesis JSON'
 $nodeos --delete-all-blocks &
}
```

Para obtener más información, visite [Cómo reproducir una instantánea](https://developers.eos.io/manuals/eos/v2.1/nodeos/replays/how-to-replay-from-a-snapshot). Además, visite [EOS Snapshot](https://developers.eos.io/search?query=snapshot) para ver todas las entradas de documentos disponibles para "Snapshot" en el portal [developer.eos.io](https://developers.eos.io/).

## Nodos de Redes de Prueba
### Configurar un Nodo en Jungle Testnet
Si quieres configurar un nodo en Jungle Testnet, puedes ir a [EOS Jungle Testnet - Node Manual Installation](https://github.com/EOS-Jungle-Testnet/Node-Manual-Installation) en Github. También puedes usar [Testnet Auto-Installer script](http://monitor.jungletestnet.io/#register). Estas herramientas fueron creadas por [cryptolions.io](https://cryptolions.io/home)

### Configurar un Nodo en Kylin Testnet
Para configurar un nodo en el Kylin Testnet, por favor ve al repositorio [CryptoKylin-Testnet](https://github.com/cryptokylin/CryptoKylin-Testnet) y sigue las instrucciones allí.

# Referencias
- [Información sobre Snapshots](https://developers.eos.io/search?query=snapshot).
- [Cryptolions Testnet Auto-Installer script](http://monitor.jungletestnet.io/#register).
- [CryptoKylin-Testnet Github repo](https://github.com/cryptokylin/CryptoKylin-Testnet)