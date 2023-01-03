# Vue Typewriter Effect

[![npm](https://img.shields.io/npm/v/vue-typewriter-effect?style=flat-square)](https://www.npmjs.com/package/vue-typewriter-effect)
[![npm](https://img.shields.io/npm/dw/vue-typewriter-effect?style=flat-square)](https://www.npmjs.com/package/vue-typewriter-effect)
[![GitHub](https://img.shields.io/github/license/ayitinya/vue-typewriter-effect?style=flat-square)](https://github.com/ayitinya/vue-typewriter-effect/blob/main/LICENSE)

## Introduction

Vue Typewriter Effect is a Vue.js wrapper for [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) package that has an average of over 10k weekly downloads.
The package is a simple and lightweight library that allows you to use typewriter effect in your Vue.js projects with ease.

## Getting Started

Install `vue-typewriter-effect` with npm:

```bash
npm install vue-typewriter-effect
```

with yarn:

```bash
yarn add vue-typewriter-effect
```

## Usage

Import the component and register it globally in your Vue instance:

```js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app
    .component("vue-typewriter-effect", VueTypewriterEffect)
    .mount("#app");
```

or locally in your component:

```vue
import VueTypewriterEffect from "vue-typewriter-effect";
```

Use the component in your template:

```vue
<vue-typewriter-effect :strings="['hello', 'world']" />
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| element | `String` | `span` | The HTML element to use for the wrapper. |
| strings | `Array` | `["Hello", "World"]` |Strings to type out when using autoStart option |
| cursor | `String` | `pipe character` | String value to use as the cursor. |
| delay | `Number` | `natural` | `natural` | The delay between each key when typing. |
| deleteSpeed | `Number` | `natural` | `natural` | The delay between each key when deleting. |
| loop | `Boolean` | `false` | Whether to loop the strings. |
| autoStart | `Boolean` | `true` | Whether to start typing automatically. |
| pauseFor | `Number` | `1500` | The pause duration after a string is typed when using autostart mode. |
| devMode | `Boolean` | `false` |  Whether or not to display console logs. |
| skipAddStyles | `Boolean` | `false` | Whether or not to skip adding styles to the document. |
| wrapperClassName | `String` | `Typewriter__wrapper` | The class name to use for the wrapper element. |
| cursorClassName | `String` | `Typewriter__cursor` | The class name to use for the cursor element. |
| stringSplitter | `Function` | `null` | A function that splits the string into an array of characters. [Example](https://codesandbox.io/s/typewriter-effect-emojis-pgz6e) |
| onCreateTextNode | `Function` | `null` | Callback function to replace the internal method which creates a text node for the character before adding it to the DOM. If you return null, then it will not add anything to the DOM and so it is up to you to handle it. |
| onRemoveNode | `Function` | `null` | Callback function when a node is about to be removed. First param will be an object `{ node: HTMLNode, charater: string }` |

See the [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) package for more information.
