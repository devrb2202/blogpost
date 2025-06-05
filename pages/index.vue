
<template>
   <div v-if="pending" class="loading-overlay h-screen d-flex align-center justify-center">
    Loading...
  </div>    
  <ContainerItem v-else>
    <template #item>
      <CardItem
        v-for="(x, index) in data" 
        :key="index"
        :title="x.name"
        :content="x.description"
        :source="x.image"
        :price="x.price"
      >
        <template #carousel>
          <CardCarousel />
        </template>
        <template #ratings>
          <CardRatings :ratings="x.ratings"/>
          <p>Sold: ({{ x.purchase }})</p>
        </template>
      </CardItem>
    </template>
  </ContainerItem>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const { pending, data, refresh } = useAsyncData('posts', () => $fetch('/api/posts'))

const avatarSize = computed(() => {
  return smAndDown.value ? 200 : 400
})
</script>