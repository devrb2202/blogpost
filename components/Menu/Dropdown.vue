<template>
     <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="transparent"
          v-bind="props"
          prepend-icon="mdi-menu"
          stacked
         :ripple="false"
         variant="flat"
         class="d-flex d-sm-none"
        >
        
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          :to="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

</template>


<script setup>
const items = ref([
        { title: 'Home' , to: '/'},
        { title: 'About', to: '/about' },
        { title: 'Projects', to: '/projects' },
        { title: 'Contact', to: '/contact' },
      ])

</script>