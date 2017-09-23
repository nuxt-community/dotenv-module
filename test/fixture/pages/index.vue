<template>
<div>
    foo:{{foo}}
    bar:{{bar}}
    baz:{{baz}}
    more1:{{more1}}
    more2:{{more2}}
</div>
</template>

<script>
export default {
    data() {
        return {
            foo: process.env.foo,
            bar: process.env.bar,
            baz: process.env.baz,
            more1: process.env.more1,
            more2: process.env.more2,
        }
    }
}
</script>