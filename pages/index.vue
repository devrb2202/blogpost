<template>
     <v-row>
        <v-col cols="12" sm="8">
            <h1 class="text-h3 mb-5">Your Blog Title</h1>
            <p>June 02, 2025 - <NuxtLink to="/" class="text-decoration-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quia.</NuxtLink>
            </p>
            <v-container class="d-flex justify-center">
                <v-btn prepend-icon="mdi-facebook" size="small" color="blue" class="ma-1">Facebook</v-btn>
                <v-btn prepend-icon="mdi-github" size="small" color="black" class="ma-1">github</v-btn>
                <v-btn prepend-icon="mdi-linkedin" size="small" color="green" class="ma-1">Linkedin</v-btn>
            </v-container>
            <v-container>
                <TextParagraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, officiis. Accusamus alias labore nisi rem provident exercitationem vel! Aspernatur, reiciendis. Exercitationem dolorum dolorem aliquam ea tenetur officia recusandae architecto delectus assumenda eos vel laudantium quibusdam perspiciatis atque sit quisquam in ab blanditiis incidunt, dolores aspernatur cum eius eum facilis. Expedita."
                    v-for="(x, index) in 5" :key="index"
                />
            </v-container>
        </v-col>
        <v-col cols="12" sm="4">
            <v-container class="d-flex justify-center mt-5 pa-5">
                    <v-avatar
                        color="grey"
                        rounded="100"
                        :size="avatarSize"
                    >
                        <v-img src="https://snipboard.io/lq1gsN.jpg" cover>

                        </v-img>
                    </v-avatar>
                 
            </v-container>
            <TextParagraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, officiis. Accusamus alias labore nisi rem provident exercitationem vel! Aspernatur, reiciendis. Exercitationem dolorum dolorem aliquam ea tenetur officia recusandae architecto delectus assumenda eos vel laudantium quibusdam perspiciatis atque sit quisquam in ab blanditiis incidunt, dolores aspernatur cum eius eum facilis. Expedita."
                
                />
            
        </v-col>
    </v-row>
</template>


<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const avatarSize = computed(() => {
  return smAndDown.value ? 200 : 400
})

</script>