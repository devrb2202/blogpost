<template>
    <ContainerForm>
        <template #center>
            <ErrorHandler :error="format" v-if="error1" :color="color"/>
            <AuthForm :model="userAuth" />
            <AuthButton title="Reset Password" color="red" @click="reset"/>
        </template>
    </ContainerForm>
   
</template>


<script setup>

const supabase = useSupabase()

const email = ref('')
const format = ref('')
const error1 = ref(false)
const color = ref('')


const userAuth = ref([
    {label: 'Email', placeholder: 'Enter your email', icon: 'mdi-email', type: 'text', model: email},
])
async function reset() {
    
    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email.value)
        if(error){
            format.value = error.message
            error1.value = true
            console.log(error)
        }
        else{
            format.value = "If this email exists, we've sent a recovery link"
            color.value = 'green'
            // error1.value = false
        }
    }
    catch(e){
        console.log('Unexpected',e)
    }

}

definePageMeta({
    layout: 'admin'
})

</script>