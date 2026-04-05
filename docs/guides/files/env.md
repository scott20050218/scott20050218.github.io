# Environmental deployment

# Vue 3.0 Project Initialize


The project of Vue 3.0 initialization process is similar to Vue 2.0, with the specific steps as follows:


## Project Initialize

First Step，install vue-cli：
```bash
npm install -g @vue/cli
```
After install，use vue command：
```bash
$ vue -V
@vue/cli 5.0.8
```

Second Step，init vue project：
```bash
vue create vue-datav --registry=https://registry.npmmirror.com
```
After input command，A command line interaction window will appear，Choice 'Manually select features'：
```bash
Vue CLI v5.0.8
? Please pick a preset: 
  default (babel, eslint) 
❯ Manually select features 
```
Choice：Router、Vuex、CSS Pre-processors and Linter / Formatter，(These are all necessary for developing commercial grade projects)：
```bash
Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project: 
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
❯◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```
> Note: The Vue 3.0 project currently needs to be upgraded from the Vue 2.0 project, so in order to directly upgrade to the Vue 3.0 family bucket, we need to check Router and Vuex during the Vue project creation process to avoid manually writing initialization code


```
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-proce
ssors, Linter
? Choose a version of Vue.js that you want to start the project with (Use arrow 
keys)
❯ 3.x 
  2.x 
```

```$xslt
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-proce
ssors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use history mode for router? (Requires proper server setup for index fallback 
in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported 
by default): (Use arrow keys)
❯ Sass/SCSS (with dart-sass) 
  Less 
  Stylus 
```
```$xslt
? Pick a linter / formatter config: 
  ESLint with error prevention only 
  ESLint + Airbnb config 
❯ ESLint + Standard config 
  ESLint + Prettier 
```
```$xslt
> to invert selection, and <enter> to proceed)
❯◉ Lint on save
 ◯ Lint and fix on commit
```
```$xslt
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files 
  In package.json 
```

After entering, the dependency will be automatically installed. To accelerate the installation speed, we can use Taobao Source to accelerate the initialization speed:
```bash
vue create -r https://registry.npm.taobao.org vue-next-test
```

After the project is created, the directory structure is as follows:
```bash
.
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   └── HelloWorld.vue
    ├── main.js
    ├── router
    │   └── index.js
    ├── store
    │   └── index.js
    └── views
        ├── About.vue
        └── Home.vue
```

# Vue 3.0 Basic feature experience

Let's gradually experience the development process of Vue 3.0 from the perspective of project development


## Create Route


In project development, we usually need to create new pages and add routing configurations. We create Test.vue in the/src/views directory:


```html
<template>
  <div class="test">
    <h1>test page</h1>
  </div>
</template>

<script>
 export default {
 }
</script>

<style lang="less" scoped>
.test {
  color: red;
}
</style>
```

Afterwards, create a routing configuration in/src/router/index.js:

```js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```

The process of initializing Vue Router is not much different from version 3.0, except for the previous method of using constructors. Here, we have changed to using createRouter to create Vue Router instances, and the configuration method is basically the same. After the configuration is completed, we also need to add a route linked to Test.vue in App.vue:


```html
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view/>
  </div>
</template>
```

startup project：
```bash
npm run serve
```

By accessing the project address in the browser, you can now jump to the Test page:
![图片描述](https://user-gold-cdn.xitu.io/2020/4/17/171889e326bb29a7?w=2588&h=824&f=png&s=69662)

## State and event binding

The method of defining states in Vue 3.0 has been changed to a method similar to React Hooks. Below, we will define a state count in Test.Vue:

```html
<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup () {
      const count = ref(0)
      return {
        count
      }
    }
  }
</script>
```

In Vue 3.0, the initialization state is defined through the setup method, and the ref method needs to be called to define the state. Next, we define an event to update the count status:

```html
<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup () {
      const count = ref(0)
      const add = () => {
        count.value++
      }
      return {
        count,
        add
      }
    }
  }
</script>
```
The add method here no longer needs to be defined in methods, but note that when updating the count value, you cannot directly use count++, but should use count. value++. After updating the code, click the button, and the count value will be updated:
![Picture](https://user-gold-cdn.xitu.io/2020/4/17/171889e3207c990f?w=2388&h=570&f=png&s=55203)

## Compute Properties and Listeners

The implementation of calculation attributes and listeners in Vue 3.0 relies on the computed and watch methods:


```html
<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
    <div>count * 2 = {{doubleCount}}</div>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import { ref, computed, watch } from 'vue'

  export default {
    setup () {
      const count = ref(0)
      const add = () => {
        count.value++
      }
      watch(() => count.value, val => {
        console.log(`count is ${val}`)
      })
      const doubleCount = computed(() => count.value * 2)
      return {
        count,
        doubleCount,
        add
      }
    }
  }
</script>
```

Computed is a method that needs to include a callback function. When we access the calculated property and return the result, we will automatically obtain the value of the callback function:

```js
const doubleCount = computed(() => count.value * 2)
```

The listener watch is also a method that contains two parameters, both of which are functions:

```js
watch(() => count.value, 
  val => {
    console.log(`count is ${val}`)
  })
```

The first parameter is the listening value, and count.value indicates that when count.value changes, it will trigger the listener's callback function, which is the second parameter. The second parameter can execute the callback during listening 

## Get Route

In Vue 3.0, the getCurrentInstance method is used to obtain the instance of the current component, and then the current context is obtained through the ctx attribute, ctx$ Router is a Vue Router instance that contains currentRoute to obtain the current routing information

```js
<script>
  import { getCurrentInstance } from 'vue'

  export default {
    setup () {
      const { ctx } = getCurrentInstance()
      console.log(ctx.$router.currentRoute.value)
    }
  }
</script>
```

## Vuex integration

Vuex The integration method is as follows：

### Define Vuex Status
The first step is to modify the src/store/index.js file:

```js
import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    test: {
      a: 1
    }
  },
  mutations: {
    setTestA(state, value) {
      state.test.a = value
    }
  },
  actions: {
  },
  modules: {
  }
})
```

The syntax and API of Vuex have basically not changed. We have created a test. a state in the state and added a method to modify the state. test. a state in the mutations: setTestA


### Referencing Vuex Status

Step 2, in Test.vue, use Vuex state by calculating attributes:
```html
<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
    <div>count * 2 = {{doubleCount}}</div>
    <div>state from vuex {{a}}</div>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import { ref, computed, watch, getCurrentInstance } from 'vue'

  export default {
    setup () {
      const count = ref(0)
      const add = () => {
        count.value++
      }
      watch(() => count.value, val => {
        console.log(`count is ${val}`)
      })
      const doubleCount = computed(() => count.value * 2)
      const { ctx } = getCurrentInstance()
      console.log(ctx.$router.currentRoute.value)
      const a = computed(() => ctx.$store.state.test.a)
      return {
        count,
        doubleCount,
        add,
        a
      }
    }
  }
</script>
```

Here we refer to the states in Vuex by calculating the attributes: 
```js
const a = computed(() => ctx.$store.state.test.a)
```
ctx is the current component instance we mentioned in the previous section

### Update Vuex status

The commit method is still used to update Vuex status, which is consistent with Vuex 3.0 version:
```html
<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
    <div>count * 2 = {{doubleCount}}</div>
    <div>state from vuex {{a}}</div>
    <button @click="add">add</button>
    <button @click="update">update a</button>
  </div>
</template>

<script>
  import { ref, computed, watch, getCurrentInstance } from 'vue'

  export default {
    setup () {
      const count = ref(0)
      const add = () => {
        count.value++
      }
      watch(() => count.value, val => {
        console.log(`count is ${val}`)
      })
      const doubleCount = computed(() => count.value * 2)
      const { ctx } = getCurrentInstance()
      console.log(ctx.$router.currentRoute.value)
      const a = computed(() => ctx.$store.state.test.a)
      const update = () => {
        ctx.$store.commit('setTestA', count)
      }
      return {
        count,
        doubleCount,
        add,
        a,
        update
      }
    }
  }
</script>
```

After clicking the update a button here, the update method will be triggered, and at this time, the ctx$ Store. commit calls the setTestA method, overwriting the value of state. test. a with the value of count


