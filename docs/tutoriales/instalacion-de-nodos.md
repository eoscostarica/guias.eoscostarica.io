---
id: instalacion-de-nodos
title: Instalación de Nodos
sidebar_label: Instalación de Nodos
---

Versión EOSIO : `v2.0.6`

Chain ID: `2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840`

Archivo Génesis : `genesis.json`


## Instale EOSIO desde Binarios Precompilados

Descargue la última versión de EOSIO para su sistema operativo desde: [Github](https://github.com/EOSIO/eos/releases/tag/v2.0.6).

Por ejemplo, para ubuntu 18.04 necesitas descargar `eosio_2.0.6-1-ubuntu-18.04_amd64.deb`.

Puedes usar apt para instalarlo:

```bash
wget https://github.com/eosio/eos/releases/download/v2.0.6/eosio_2.0.6-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.6-1-ubuntu-18.04_amd64.deb
```

Descargará todas las dependencias e instalará EOSIO a `/usr/opt/eosio/v2.0.6`.

### Desinstalar Script

Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:

```bash
./scripts/eosio_uninstall.sh
```

## Configurar el Nodo Jungle Testnet

```
mkdir ~/Jungle-testnet
cd ~/Jungle-testnet
git clone https://github.com/Jungle/testnet.git ./
```

- Editar config.ini

    - Ingrese la dirección externa de su servidor: `p2p-server-address = YOUR_DOMAIN_OR_IP: 9876`

- Abra los puertos TCP (8888, 9876) en su firewall / enrutador

Especifique un archivo genesis.json la primera vez que ejecute nodeos.

```
./start.sh --delete-all-blocks --genesis-json genesis.json
```
Siga los registros para verificar que su nodo esté funcionando correctamente.

```
tail -f stderr.txt
```

Compruebe si puede acceder a su nodo mediante el enlace `http://**SERVIDOR**/v1/chain/get_info`.

Aquí hay una API [Ejemplo](https://lacchain.eosio.cr/v1/chain/get_info).

### Iniciar y Detener Nodeos

- `./start.sh`: Inicia y reinicia el servicio Nodeos.

- `./stop.sh`: Realiza un cierre ordenado del servicio Nodeos.