<template>
    <h1>Admin Dashboard</h1>
    <p>Email: {{ user.email }}</p>
   
</template>


<script setup>

const user = useSupabaseUser()
const supabase = useSupabaseClient()


definePageMeta({
    layout: 'dashboard',
    middleware: ["auth"]
})



</script>