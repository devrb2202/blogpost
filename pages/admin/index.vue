<template>
     <ContainerForm>
        <template #center>
            <AuthForm :model="userAuth" />
            <AuthButton title="Sign In"/>
        </template>
    </ContainerForm>
    <!-- <v-container>
        <v-row class="justify-center mb-5 mt-5">
             <v-col cols="12" sm="4" class="bg-grey-lighten-3 pa-10">
                <AuthForm :model="userAuth" />
                <AuthButton title="Sign In"/>
             </v-col>
        </v-row>   
    </v-container> -->
</template>


<script setup>

const email = ref('')
const password = ref('')


const userAuth = ref([
    {label: 'Email', placeholder: 'Enter your email', icon: 'mdi-email', type: 'text', model: email.value},
    {label: 'Password',placeholder: 'Enter your password', icon: 'mdi-lock', type: 'password', model: password.value},
])

definePageMeta({
    layout: 'admin'
})
</script>