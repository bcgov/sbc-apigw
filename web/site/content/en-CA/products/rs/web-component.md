# Web Component

A framework-agnostic simple to use web component to handle business searches.

::BcrosSearchExample
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact />
  )
}
```
::

---

## Installation

```bash
npm install bcros-search
```
```bash
pnpm add bcros-search
```
```bash
yarn add bcros-search
```

## Examples

### Live Demos

View and edit live code examples.

<a href="https://stackblitz.com/edit/vitejs-vite-rezknz?file=src%2Fmain.ts" target="_blank">HTML</a>
<br>
<a href="https://stackblitz.com/edit/vitejs-vite-c5zgrt?file=src%2FApp.vue" target="_blank">Vue</a>
<br>
<a href="https://stackblitz.com/edit/vitejs-vite-93dbwu?file=src%2FApp.tsx" target="_blank">React</a>

### Result Limit

Control the maximum number of items displayed in the dropdown section.
<br>
Property: limit="3"

::BcrosSearchExample{limit=3}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search limit="3"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search limit="3" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact limit="3" />
  )
}
```
::

### Legal Type

Filter the search results by the business's legal type.
<br>
Property: legal="SP" (Sole Proprietorship)

::BcrosSearchExample{legal="SP"}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search legal="SP"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search legal="SP" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact legal="SP" />
  )
}
```
::

### Business Status

Filter the search results by the business's current status.
<br>
Property: status="historical"

::BcrosSearchExample{status="historical"}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search status="historical"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search status="historical" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact status="historical" />
  )
}
```
::

### Displayed Columns

Customize the displayed columns in the dropdown. The order can also be altered using this property. This does not affect the search result set.
<br>
Property: columns='["name", "bn", "status"]'

::BcrosSearchExample{:columns='["name", "bn", "status"]'}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search columns="name,bn,status"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search :columns='["name", "bn", "status"]' />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact columns="name,bn,status" />
  )
}
```
::

### Element Width

Customize the width of the input and dropdown element.
<br>
Property: width="20rem"

::BcrosSearchExample{width="20rem"}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search width="20rem"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search width="20rem" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact width="20rem" />
  )
}
```
::

### Input Label

Customize the label value of the input element.
<br>
Property: label="My Custom Label"

::BcrosSearchExample{label="My Custom Label"}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search label="My Custom Label"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search label="My Custom Label" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact label="My Custom Label" />
  )
}
```
::

### Input Aria-Label

Customize the aria-label value of the input element.
<br>
Property: a11ylabel="My Custom Aria-Label"

::BcrosSearchExample{a11ylabel="My Custom Aria-Label"}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search a11ylabel="My Custom Aria-Label"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search a11ylabel="My Custom Aria-Label" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact a11ylabel="My Custom Aria-Label" />
  )
}
```
::

### Input Hint

Customize the hint value of the input element.
<br>
Property: hint="My Custom Input Hint"

::BcrosSearchExample{hint="My Custom Input Hint"}
#html
```html
<script type="module">
  import "bcros-search"
</script>

<bcros-search hint="My Custom Input Hint"></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
</script>
<template>
  <bcros-search hint="My Custom Input Hint" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'

export default function App () {
  return (
    <BcrosSearchReact hint="My Custom Input Hint" />
  )
}
```
::

### Select Event

The event fired when selecting a business from the dropdown menu. 

::BcrosSearchExample{:showEvent="true"}
#html
```html
<!-- this will vary depending on the project implementation  -->
<script type="module">
  import "bcros-search"
</script>

<bcros-search></bcros-search>
```

#vue
```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'
  import { ref } from 'vue'

  const selected = ref('')

  function handleSelect(event: CustomEvent) {
    selected.value = event.detail
  }
</script>
<template>
  <bcros-search @select="handleSelect" />
</template>
```

#react
```js
import { BcrosSearchReact } from 'bcros-search'
import { useState } from 'react'

export default function App () {
  const [selected, setSelected] = useState('')

  function handleSelect(event: CustomEvent) {
    setSelected(event.detail);
  }

  return (
    <>
      <BcrosSearchReact onSelect="handleSelect" />
      <span>Selected Business: {selected}</span>
    </>
  )
}
```
::

## Properties

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>limit</td>
    <td>Control the maximum number of items displayed in the dropdown section.</td>
    <td>number</td>
    <td>false</td>
    <td>5</td>
  </tr>
  <tr>
    <td>legal</td>
    <td>Filter the search results by the business's legal type.</td>
    <td>string</td>
    <td>false</td>
    <td>all</td>
  </tr>
  <tr>
    <td>status</td>
    <td>Filter the search results by the business's status.</td>
    <td>string</td>
    <td>false</td>
    <td>'active,historical'</td>
  </tr>
  <tr>
    <td>columns</td>
    <td>Customize the displayed columns in the dropdown. 
    The order can also be altered using this property. This does not affect the search result set. When using this property in plain html, it will accept a string of comma separated column names.</td>
    <td>Array | String</td>
    <td>false</td>
    <td>
      'name,
      identifier,
      bn,
      legalType,
      status,
      goodStanding'
    </td>
  </tr>
  <tr>
    <td>width</td>
    <td>Changes the width of the input and dropdown element.</td>
    <td>string</td>
    <td>false</td>
    <td>'100%'</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Changes the inputs label text.</td>
    <td>string</td>
    <td>false</td>
    <td>'Business Name, Incorporation/Registration Number or CRA Business Number'</td>
  </tr>
  <tr>
    <td>a11ylabel</td>
    <td>Changes the inputs aria-label text.</td>
    <td>string</td>
    <td>false</td>
    <td>'Start typing to search for ' + label</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>Changes the inputs hint text.</td>
    <td>string</td>
    <td>false</td>
    <td>'Example: "Test Construction Inc.", "BC0000123", "987654321"'</td>
  </tr>
</table>

## Events

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>select</td>
    <td>Emits the selected business's data object.</td>
  </tr>
</table>

## Frameworks

### Vue + Nuxt

See the <a href="https://vuejs.org/guide/extras/web-components.html" target="_blank">Vue Docs</a> for more information on using web components.

#### Vue Config
```js
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags starting with 'bcros-' as custom elements
          isCustomElement: (tag) => tag.startsWith('bcros-')
        }
      }
    })
  ]
}
```

#### Nuxt Config
```js
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // get environment variables from .env file
    xApiKey: '',
    accountID: ''
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          // treat all tags starting with 'bcros-' as custom elements
          isCustomElement: (tag) => tag.startsWith('bcros-')
        }
      }
    }
  }
})
```

#### Usage

```vue
<script setup lang="ts">
  import { BcrosSearch } from 'bcros-search'

  function handleSelect (event: CustomEvent) {
    console.log(event.detail)
  }
</script>
<template>
  <bcros-search @select="handleSelect"></bcros-search>
</template>
```

### React

React does not require any special config but it does require a wrapper component to render correctly.

```js
// app.js
import { BcrosSearchReact } from 'bcros-search';

export default function App () {
  function handleSelect (event: CustomEvent) {
    console.log(event.detail)
  }

  return (
    <BcrosSearchReact onSelect={handleSelect} />
  )
}
```

## Accessibility

The `bcros-search` web component prioritizes accessibility by adhering to combobox semantics, ensuring compliance with AA standards as outlined in the <a href="https://www.w3.org/" target="_blank">Web Content Accessibility Guidelines</a>. For detailed usage instructions and keyboard bindings, refer to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" target="_blank">Combobox Pattern</a> documentation.

## Resources

<a href="https://github.com/daxiom/bcros-search" target="_blank">Github Repo</a>