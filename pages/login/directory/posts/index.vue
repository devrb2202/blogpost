<template>
    <v-container>
            <v-col cols="12" sm="12">
                 <h1 class="text-h3 text-center mb-10">Items</h1>
                <v-row class="justify-center">
                     <CardItem v-for="(item) in store"
                        :key="item"
                        :title="item.item"
                        :subtitle="item.uuid"
                        :content="item.description"
                        :source="item.image"
                    >
                    <template #button>
                        <v-btn>Add to Cart</v-btn>
                    </template>
                    </CardItem>
                   
                </v-row>
            </v-col>
            <v-btn color="green" @click="loadData">Load Data</v-btn>
    </v-container>
</template>


<script setup>

const supabase = useSupabaseClient()
const store = ref([])
const isError = ref('')

async function loadData() {
    const { data, error } = await supabase
  .from('jojotech')
  .select('*')
    if(error){
        console.log(error)
        isError.value = error.message
    }
    else {
        store.value = data
    }
}

definePageMeta({
    layout: 'dashboard'
})

</script>