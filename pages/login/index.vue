<template>
     <ContainerForm>
        <template #center>
            <LoadingEffects :active="loading" :indeterminate="loading"/>
            <ErrorHandler :error="logger" v-if="isInvalid"/>
            <AuthForm :model="userAuth" />
            <AuthButton title="Sign In" @click="signIn"/>
        </template>
    </ContainerForm>
</template>


<script setup>

const supabase = useSupabaseClient()
// const router = useRouter()
const user = useSupabaseUser()

const loading = ref(false)
const email = ref('')
const password = ref('')
const logger = ref('')
const isInvalid = ref(false)

const userAuth = ref([
    {label: 'Email', placeholder: 'Enter your email', icon: 'mdi-email', type: 'text', model: email},
    {label: 'Password',placeholder: 'Enter your password', icon: 'mdi-lock', type: 'password', model: password},
])

definePageMeta({
    layout: 'admin',
    middleware: ['directory']
})


async function signIn() {
    loading.value = true
    try {
         const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })
        if (user.value) {
            isInvalid.value = false
            setTimeout(() => {loading.value = false},3000)
            navigateTo('/login/directory')
        }
        if(error) {
            console.log('Problem is ', error)
            isInvalid.value = true
            logger.value = error.message
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
