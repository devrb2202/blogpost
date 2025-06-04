<template>
    <h1>Account Settings</h1>
    <v-container>
        <v-row>
            <v-col cols="4">
                 <AuthForm :model="userAuth" />
                 <AuthButton title="Apply Changes" @click="changePass"/>
            </v-col>
        </v-row>
    </v-container>
   
</template>


<script setup>

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const logger = ref('')
const isInvalid = ref(false)

const userAuth = ref([
    {label: 'Email', placeholder: 'Enter your email', icon: 'mdi-email', type: 'text', model: email},
    {label: 'Password',placeholder: 'Enter your password', icon: 'mdi-lock', type: 'password', model: password},
    {label: 'Confirm Password',placeholder: 'Confirm your password', icon: 'mdi-lock', type: 'password', model: confirmPassword},
])


async function changePass() {
    const { data: user, error } = await supabase.auth.admin.updateUserById(
    user.updateUserById,
    { password: password.value }

    )
    if(error){
        console.log(error)
    }
    else{
        logger.value = user
    }
}



definePageMeta({
    layout: 'dashboard',
   
})

</script>