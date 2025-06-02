<template>
    <NuxtLink class="ma-5 text-h6 text-decoration-none d-none d-md-flex d-lg-flex d-sm-flex" >{{ title }}</NuxtLink>
</template>


<script setup>

defineProps({
    title: String,
})

</script>