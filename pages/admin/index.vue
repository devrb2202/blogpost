<template>
     <ContainerForm>
        <template #center>
            <LoadingEffects :active="loading" :indeterminate="loading"/>
            <AuthForm :model="userAuth" />
            <AuthButton title="Sign In" @click="signIn"/>
        </template>
    </ContainerForm>
</template>


<script setup>

const supabase = useSupabase()

const loading = ref(false)
const email = ref('')
const password = ref('')
const logger = ref('')

const userAuth = ref([
    {label: 'Email', placeholder: 'Enter your email', icon: 'mdi-email', type: 'text', model: email},
    {label: 'Password',placeholder: 'Enter your password', icon: 'mdi-lock', type: 'password', model: password},
])

definePageMeta({
    layout: 'admin',
})
// definePageMeta({
//   middleware: 'auth'
// })


async function signIn() {
    loading.value = true
    try {
         const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })
        if(error) {
            console.log('Problem is ', error)
        }
        else {
            console.log(logger.value = data)
            setTimeout(() => {loading.value = false}, 3000)
        }
    }
    catch(e) {
        console.error('Unexpected error:', e)
    }
    finally {
        loading.value = false // ✅ Always stop loading kahit may error
    }
   
}


</script>
