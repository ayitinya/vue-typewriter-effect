# Getting Started

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
