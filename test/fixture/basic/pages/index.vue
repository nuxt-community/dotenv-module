<template>
  <div>
    foo: {{ foo }}
    bar: {{ bar }}
    baz: {{ baz }}
    more1: {{ more1 }}
    more2: {{ more2 }}
  </div>
</template>

<script>
export default {
  asyncData ({ env }) {
    return {
      more1: env.more1,
      more2: env.more2
    }
  },
  data () {
    return {
      foo: process.env.foo,
      bar: process.env.bar,
      baz: process.env.baz
    }
  }
}
</script>
