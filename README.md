# Projeto Marketplace desenvolvido no curso Especialista React Native do OneBitCode

Api de vagas de emprego

![technology React Native](https://img.shields.io/badge/techonolgy-React_Native-blue)
![techonolgy Expo](https://img.shields.io/badge/techonolgy-Expo-blueviolet)
![technology NPM](https://img.shields.io/badge/techonolgy-NPM-red)

## Getting Started

## Pré-requisitos

- Node
- NPM

## Configurando a aplicação

para o projeto funcionar corretamente é necessário configurar a aplicação backend localizada em:

[reactnative-marketplace](https://github.com/juniorjrjl/reactnative-marketplace)

informe o endereço do backend usado pelo app no arquivo localizado em src/services/api.ts

```
import axios from "axios";

const baseURL = "http://192.168.0.199:3000";

...
```

## Executando a aplicação

inicie a aplicação

```
npm expo start
```

escaneie o QR code gerado no terminal pelo seu celular ( necessário ter o aplicativo Expo Go instalado)