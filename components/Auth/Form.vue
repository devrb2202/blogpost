<template>
    <v-text-field
        v-for="(x, index) in model" :key="index"
        :label="x.label"
        :placeholder="x.placeholder"
        :prepend-inner-icon="x.icon"
        :type="x.type"
        v-model="x.model"
        variant="underlined"
    >
    </v-text-field>
</template>

<script setup>

defineProps({
    model: Array,
    label: String,
    placeholder: String,
    icon: String,
    type: String
})

</script>