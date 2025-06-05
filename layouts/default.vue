<template>
    <v-container fluid class="bg-grey-lighten-2">
        <v-row no-gutters class="justify-center pa-4">
            <h1 class="text-h2 mb-5">Dojo Tech</h1>
            <v-divider></v-divider>
            <v-container class="pa-4 d-flex justify-center">
                <MenuDropdown :route="route" />
            
                <TextLink  title=""/>
                <v-col cols="12">      
                    <v-row class="justify-center">
                        <TextLink v-for="(x, index) in route" 
                            :key="index" 
                            :to="x.to" 
                            :title="x.title"
                        />
                        <TextLink
                            :title="user ? 'Back to Dashboard' : 'Login'"
                            :to="user ? '/login/directory' : '/login'"
                        />
                    </v-row>
                </v-col>
            </v-container>
           <v-divider></v-divider>
        </v-row>
    </v-container>
    <v-container class="bg-grey-lighten-3" fluid>
        <slot />
    </v-container>
</template>

<script setup>

const user = useSupabaseUser()

const route = ref([
    {to: '/', title: 'Home'},
    {to: '/about', title: 'About'},
    {to: '/projects', title: 'Projects'},
    {to: '/contact', title: 'Contact'},
    // {to: '/login/directory', title: 'Back to Dashboard'},
])




</script>


