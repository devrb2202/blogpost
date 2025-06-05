<template>
  <v-carousel
    height="40"
    progress="primary"
    hide-delimiters
    cycle
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <!-- <div class="text-h6">
            {{ slide }} 
          </div>
            <div class="text-h6">
            {{ slide }} 
          </div> -->
          <CardImages />
          <CardImages />
          <CardImages />
          <CardImages />
        
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>