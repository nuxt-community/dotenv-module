<template>
<div>
    foo:{{foo}}
</div>
</template>

<script>
export default {
    data() {
        return {
            foo: process.env.foo,
        }
    }
}
</script>