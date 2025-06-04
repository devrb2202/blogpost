import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

  await new Promise(resolve => setTimeout(resolve, 2000)) 
  
  try {
    
    const client = await serverSupabaseClient(event)
    const { data, error } = await client.from('jojotech').select('*')
    
    if (error) {
      throw createError({ statusCode: 500, statusMessage: error.message })
    }

    return data
  } catch (err) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch data' })
  }
})