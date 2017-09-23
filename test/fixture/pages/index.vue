<template>
<div>
    foo:{{foo}}
    bar:{{bar}}
    baz:{{baz}}
</div>
</template>

<script>
export default {
    data() {
        return {
            foo: process.env.foo,
            bar: process.env.bar,
            baz: process.env.baz,
        }
    }
}
</script>