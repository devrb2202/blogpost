<!-- <template>
   <ContainerItem>
    <template #item>
        <CardItem v-for="(x, index) in store" :key="index"
        :title="x.name"
        :content="x.description"
        :source="x.image"
       
        />
    </template>
   </ContainerItem>
</template>


<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
const supabase = useSupabaseClient()
const store = ref([])

const avatarSize = computed(() => {
  return smAndDown.value ? 200 : 400
})


async function fetchItem(){
    const { data, error } = await supabase.from('jojotech').select()
    if(error){
        console.log(error)
    }
    store.value = data
}

fetchItem()

</script>
 -->
<template>
  <div v-if="pending" class="text-center py-8">
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
    ></v-progress-circular>
  </div>
  <ContainerItem v-else>
    <template #item>
      <CardItem
        v-for="(x, index) in data" 
        :key="index"
        :title="x.name"
        :content="x.description"
        :source="x.image"
      />
    </template>
  </ContainerItem>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const { pending, data, refresh } = useAsyncData('posts', () => $fetch('/api/posts'))
// const { pending, data, error } = useLazyFetch('/api/posts')

const avatarSize = computed(() => {
  return smAndDown.value ? 200 : 400
})
</script>