<template>
    <v-sheet class="bg-red-lighten-2 pa-5 mb-10">
        <p class="text-caption">{{ error }}</p>
    </v-sheet>
</template>

<script setup>

defineProps({
    error: String
})


</script>