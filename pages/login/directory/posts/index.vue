<template>
    <BaseContainer>
        <template #col-01>
            <form @submit.prevent="submitForm">
                <BaseForms :model="object"/>
                <BaseButton type="submit" title="Submit"/>
            </form>
        </template>
        <template #col-02>
            <h1>Data Table</h1>
        </template>
    </BaseContainer>
</template>

<script setup>
const item = ref('')
const description = ref('')
const quantity = ref('')
const price = ref('')
const image = ref('')
const ratings = ref('')
const sold = ref('')

const object = ref([
    {label: 'Item', placeholder: 'Item', icon:'', model: item },
    {label: 'description', placeholder: 'description', icon:'', model: description },
    {label: 'quantity', placeholder: 'quantity', icon:'', model: quantity , type: 'number'},
    {label: 'price', placeholder: 'price', icon:'', model: price , type: 'number'},
    {label: 'image', placeholder: 'image', icon:'', model: image },
    {label: 'ratings', placeholder: 'ratings', icon:'', model: ratings , type: 'number'},
    {label: 'sold', placeholder: 'sold', icon:'', model: sold , type: 'number'},
])

const submitForm = async () => {
    try {
        const { data, error } = await $fetch('/api/submit', {
            method: 'POST',
            body: {
                item: item.value,
                description: description.value,
                quantity: quantity.value,
                price: price.value,
                image: image.value,
                ratings: ratings.value,
                sold: sold.value
            }
        });
        
        if (error) throw error;
        
        // Reset form after successful submission
        item.value = '';
        description.value = '';
        quantity.value = '';
        price.value = '';
        image.value = '';
        ratings.value = '';
        sold.value = '';
        
        alert('Data submitted successfully!');
    } catch (error) {
        console.error('Error submitting data:', error);
        alert('Failed to submit data');
    }
}

definePageMeta({
    layout: 'dashboard'
})
</script>