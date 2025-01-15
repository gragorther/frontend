<script lang="ts">
	import type { UserPost } from '$lib';
	import { Heart } from 'lucide-svelte';

	interface Props {
		post: UserPost;
	}

	let { post = $bindable() }: Props = $props();
</script>

<div class="border-2 border-pink-400 rounded-2xl max-w-xs overflow-auto p-4">
	<div class="flex flex-col items-center text-center">
		{post.text}
		<button
			class="text-white hover:text-white rounded-full px-4 py-2"
			onclick={() => (post.likes = post.likes + 1)}><Heart />{post.likes}</button
		>
		<p>{new Date(post.timestamp).toLocaleString()}</p>
	</div>
</div>
