import { supabase } from '$lib/server/supabase_client';

export async function load({ params }) {
	// Checking item exists
	console.log('Fetching product with ID:', params.id);

	const { data: product, error } = await supabase
		.from('products')
		.select('*')
		.eq('id', params.id)
		.single();

	if (error) {
		console.error('Error fetching product:', error);
		return { product: null };
	}

	return { product };
}
