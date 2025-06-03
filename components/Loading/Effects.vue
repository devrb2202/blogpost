<template>
    <v-progress-linear
        color="deep-purple-accent-4"
        location="top"
        absolute
        >
    </v-progress-linear>
     <!-- :active="loading"
        :indeterminate="loading" -->

    <!-- <v-scale-transition>
        <div
            v-if="!loading"
            class="text-center"
        >
        <v-btn
            color="primary"
            @click="loading = true"
        >
            Start loading
        </v-btn>
        </div>
    </v-scale-transition> -->
    
   
</template>
<!-- <script>
  export default {
    data: () => ({
      loading: false,
    }),

    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 3000)
      },
    },
  }
</script> -->