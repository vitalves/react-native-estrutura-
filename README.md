# Projeto-React-Native

## Projeto feito em aula do modulo 06 "Primeiro projeto com React Native" do curso da Rockeseat

**[ CONTEM ANOTAÇÕES, OBSERVAÇÕES E RASCUNHOS ELABORADOS DURANTE A AULA ]**

## APLICAÇÃO:
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
OU:
- Rodar o projeto no IPhone:

```js
  react-native run-ios
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
### Instalando o Reactotron para debugs

```js
yarn add reactotron-react-native
```

- Criar e configurar o arquivo _'ReactotronConfig.js'_ dentro de '/src/config/';
- Adicionar a variável ```js __DEV__ ``` como 'readonly' no arquivo _'eslintrc.js'_;
- importar _'./config/ReactotronConfig'_ no _index.js_ de 'src';
__CONFIGS__
Emulando pelo USB: inserir: _(no Reactotron.config( AQUI ))_
```js
{ host: '192.168.0.2 }
// configuracoes da rede
// No ANDROID é possível que precise de um redirecionamento de portas do ADB (ver na documentação)
// NO TERMINAL: $  adb reverse tpc:9090 tcp:9090
```

## React Navigation

```js
  yarn add react-navigation yarn add react-navigation-stack react-native-gesture-handler react-native-reanimated
```

**NO ANDROID:**
- Atualizar o arquivo _'MainActivity.java'_ com as configs abaixo:

```js
// NO INÍCIO DO ARQUIVO:
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

// AO FINAL DO ARQUIVO (dentro da class: public class MainActivity extends ReactActivity):
@Override
protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
```

- Rodar a aplicação novamente (instala as dependências nativas):

```js
yarn react-native run-android
```

## Styled Components

```js
yarn add styled-components
```
_Importa-se do subdiretorio chamado 'native' ('styled-components/native)_

## Ícones da aplicação:

```js
yarn add react-native-vector-icons
```
