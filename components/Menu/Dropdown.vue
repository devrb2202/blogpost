<template>
     <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="transparent"
          v-bind="props"
          prepend-icon="mdi-menu"
         variant="flat"
         class="d-flex d-sm-none"
         :ripple="false"
         stacked
        >
        
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in route"
          :key="index"
          :value="item.title"
          :to="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

</template>


<script setup>
// const items = ref([
//         { title: 'Home' , to: '/'},
//         { title: 'About', to: '/about' },
//         { title: 'Projects', to: '/projects' },
//         { title: 'Contact', to: '/contact' },
//       ])

defineProps({
    route: Array
})

</script>