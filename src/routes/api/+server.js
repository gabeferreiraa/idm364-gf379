import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fnaahxaalcvdeddcfpae.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
	try {
		const { data, error } = await supabase.from('products').select('*');

		if (error) throw error;

		return new Response(JSON.stringify(data), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
