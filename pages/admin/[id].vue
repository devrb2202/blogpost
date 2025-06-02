<template>
    <h1>{{ router.params.id }}</h1>
</template>


<script setup>

const router = useRoute()

console.log(router.params)

</script>