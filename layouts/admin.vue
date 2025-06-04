<template>
    <v-container fluid class="bg-grey-lighten-2">
        <v-row no-gutters class="justify-center pa-4">
            <h1 class="text-h1 mb-5">Blog Title</h1>
            <v-divider></v-divider>
            <v-container class="pa-4 d-flex justify-center">
                <MenuDropdown :route="route"/>
                <v-col cols="12">      
                    <v-row class="justify-center">
                        <TextLink v-for="(x, index) in route" 
                            :key="index" 
                            :to="x.to" 
                            :title="x.title"
                        />
                    </v-row>
                </v-col>
            </v-container>
           <v-divider></v-divider>
        </v-row>
    </v-container>
    <v-container>
        <slot />
    </v-container>
</template>

<script setup>
const route = ref([
    {to: '/', title: 'Homepage'},
    {to: '/login', title: 'Sign In'},
    {to: '/login/resetpassword', title: 'Reset Password'},
])

</script>


