<template>
    <v-card width="300" class="ma-5">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        <v-card-text class="text-truncate">{{ content }}</v-card-text>
        <v-card-text>
            <v-img
                :width="200"
                aspect-ratio="16/9"
                cover
                :src="source"
            >
            </v-img>
        </v-card-text>
        <v-card-text>
            <slot name="button"></slot>
        </v-card-text>
    </v-card>

</template>


<script setup>
defineProps({
    title: String,
    subtitle: String,
    content: String,
    source: String
})

</script>