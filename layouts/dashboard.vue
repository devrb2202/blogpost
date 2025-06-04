<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" width="300">
      <!--  -->
      <MenuSideNav>
        <template #logout>
            <v-btn color="black" @click="logout" block>logout</v-btn>
        </template>
      </MenuSideNav>
       
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>

const drawer = ref(null)


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

</script>

