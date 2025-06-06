<!-- Dynamic Route /products/[id].vue -->
<template>
  <div v-if="pending" class="loading-overlay h-screen d-flex align-center justify-center">
    Loading...
  </div>
  <div v-else-if="product">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <img :src="product.image" :alt="product.name" />
    <div>
      <CardRatings :ratings="product.ratings"/>
      <p>Sold: ({{ product.purchase }})</p>
    </div>
  </div>
  <div v-else>
    Product not found
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const { pending, data: products } = useAsyncData('products', () => $fetch('/api/posts'))

// Find the specific product by ID
const product = computed(() => {
  return products.value?.find(item => item.id.toString() === id.toString())
})
</script>