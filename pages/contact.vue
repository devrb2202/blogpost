<template>
    <!-- <v-row class="justify-center">
        <v-col cols="12" sm="6" class="justify-center">
            <v-text-field label="Name" prepend-inner-icon="mdi-account" variant="outlined" ></v-text-field>
            <v-text-field label="Mobile Number" prepend-inner-icon="mdi-phone" type="number" variant="outlined"></v-text-field>
            <v-text-field label="Email" prepend-inner-icon="mdi-email" variant="outlined" ></v-text-field>
            <v-btn color="green" prepend-icon="mdi-send">Submit Request</v-btn>
        </v-col>
    </v-row> -->
    <ContainerForm>
        <template #center>
            <AuthForm :model="form"/>
            <AuthButton title="Submit" color="green" @click="test"/>
        </template>
    </ContainerForm>

</template>

<script setup>

const name = ref('')
const mobileNumber = ref('')
const email = ref('')

const form = ref([
    {label: 'Name', icon: 'mdi-account', model: name.value },
    {label: 'Mobile Number', icon: 'mdi-phone', model: mobileNumber.value },
    {label: 'Email', icon: 'mdi-email', model: email.value },
])

const test = () => {
   alert('Test')
}
</script>