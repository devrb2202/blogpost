<template>
    <v-card width="300" class="ma-5">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        <v-card-text>
            <v-img
                :width="200"
                :height="200"
                aspect-ratio="16/9"
                cover
                :src="source"
            >
            </v-img>
        </v-card-text>
        <v-card-text>
            <slot name="carousel"></slot>
        </v-card-text>
        <v-card-text class="text-truncate">{{ content }}</v-card-text>
        <v-card-text>
           <slot name="ratings"></slot>
        </v-card-text>
        <v-card-text class="text-h6 text-orange"><span>&#8369;</span>{{ price.toLocaleString() }}</v-card-text>
    </v-card>

</template>

<style scoped>

.text-orange {
    color: orange;
}

</style>

<script setup>
defineProps({
    title: String,
    subtitle: String,
    content: String,
    source: String,
    price: String

})

</script>