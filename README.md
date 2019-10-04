# Projeto-React-Native

## Projeto feito em aula do modulo 06 "Primeiro projeto com React Native" do curso da Rockeseat

**[ CONTEM ANOTAÇÕES, OBSERVAÇÕES E RASCUNHOS ELABORADOS DURANTE A AULA ]**

_APLICAÇÃO:_
Consumir dados da API do GitHub: Usuários e repositórios favoritados.

- inicia o projeto e cria o diretório:
```js
  npx react-native init modulo06
```
_Entrar no diretório_
_Abrir o emulador_

- Rodar o projeto no Android:

```js
  react-native run-android
```
- Iniciando a aplicação:
```js
  react-native start
```
### Configurações de ambiente (ESLint, Prettier & EditorConfig):

- Gerar o _.editorconfig_

- Instalar o eslint _(Deletar o arquivo .eslintrc.js ante de prosseguir se ele já existir)_

```js
yarn add eslint -D
```
- Configurar o eslint
```js
yarn eslint --init
```

PASSOS:

```js
- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- React
-  Use a popular style guide
- Airbnb (https://github.com/airbnb/javascript)
- JavaScript
```
_RECRIADO O ARQUIVO .eslintrc.js_
_Excluir o arquivo 'package-lock' e dá um 'yarn' no terminal_

- Instalar dependências adicionais:
```js
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```
_Adicionar configirações no arquivo .eslintrc.js_

_Conferir configurações do arquivo '.prettierrc.js'_

- Resetar a Aplicação
```js
  react-native start --reset-cache
```
