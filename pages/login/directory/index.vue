<template>
    <h1>Admin Dashboard</h1>
    <p>Email: {{ user.email }}</p>
    <v-btn color="black" @click="logout">logout</v-btn>
</template>


<script setup>

const user = useSupabaseUser()
const supabase = useSupabaseClient()


async function logout() {
    const { error } = await supabase.auth.signOut()

    if(error){
        alert(error)
    }
    else{
        navigateTo('/login')
    }
}

definePageMeta({
    layout: 'dashboard',
    middleware: ["auth"]
})



</script>