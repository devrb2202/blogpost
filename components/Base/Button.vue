<template>
    <v-btn color="primary">{{ title }}</v-btn>
</template>


<script setup>

defineProps({
    title: String,
})

</script>