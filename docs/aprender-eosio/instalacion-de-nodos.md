---
id: instalacion-de-nodos
title: Instalación de Nodos
sidebar_label: Instalación de Nodos
---

Versión EOSIO : `v2.0.6`

Chain ID: `2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840`

Archivo Génesis : `genesis.json`


## Instale EOSIO desde binarios precompilados

Descargue la última versión de EOSIO para su sistema operativo desde: [https://github.com/EOSIO/eos/releases/tag/v2.0.6](https://github.com/EOSIO/eos/releases/tag/v2.0.6)

Por ejemplo, para ubuntu 18.04 necesitas descargar `eosio_2.0.6-1-ubuntu-18.04_amd64.deb`

Puedes usar apt para instalarlo:

```bash
wget https://github.com/eosio/eos/releases/download/v2.0.6/eosio_2.0.6-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.6-1-ubuntu-18.04_amd64.deb
```

Descargará todas las dependencias e instalará EOSIO a `/usr/opt/eosio/v2.0.6`

### Desinstalar

Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:

```bash
./scripts/eosio_uninstall.sh
```

