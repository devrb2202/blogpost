import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event);
    const body = await readBody(event);
    
    try {
        const { data, error } = await client.from('jojotech').insert([
            {
                item: body.item,
                description: body.description,
                quantity: body.quantity,
                price: body.price,
                image: body.image,
                ratings: body.ratings,
                sold: body.sold
            }
        ]).select();
        
        if (error) {
            throw createError({ statusCode: 500, statusMessage: error.message });
        }
        
        return data;
    } catch (err) {
        throw createError({ statusCode: 500, statusMessage: 'Failed to insert data' });
    }
});