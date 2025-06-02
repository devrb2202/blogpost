<template>
    <ContainerForm>
        <template #center>
            <AuthForm :model="userAuth" />
            <AuthButton title="Reset Password" color="red"/>
        </template>
    </ContainerForm>
     <!-- <v-container>
        <v-row class="justify-center mb-5 mt-5">
             <v-col cols="12" sm="4" class="bg-grey-lighten-3 pa-10">
                <AuthForm :model="userAuth" />
                <AuthButton title="Reset Password" color="red"/>
             </v-col>
        </v-row>   
    </v-container> -->
</template>


<script setup>
const email = ref('')


const userAuth = ref([
    {label: 'Email', placeholder: 'Enter your email', icon: 'mdi-email', type: 'text', model: email.value},
    
])

definePageMeta({
    layout: 'admin'
})

</script>