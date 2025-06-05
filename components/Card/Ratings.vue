<template>
    <v-rating
        half-increments
        hover
        readonly
        active-color="yellow-accent-4"
        :length="5"
        :size="20"
        :model-value="ratings"
    />
</template>

<script setup>

defineProps({
    ratings: String,
})

</script>
