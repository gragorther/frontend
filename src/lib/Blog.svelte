<script lang="ts">
	interface Props {
		image?: string;
		title?: string;
		previewText?: string;
		link?: string; // The URL for the full post
		date?: string;
	}

	let {
		image = '',
		title = '',
		previewText = '',
		link = '',
		date = ''
	}: Props = $props();
</script>

<div class="flex flex-wrap gap-6 justify-center">
	<a
		href={link}
		class="block max-w-2xl mx-auto p-4 bg-purple-200 rounded-lg shadow-md cursor-pointer"
		target="_blank"
		rel="noopener noreferrer"
	>
		<!-- Blog Post Image -->
		{#if image}
			<img src={image} alt="Blog post" class="w-full h-64 object-contain rounded-t-lg" />
		{/if}

		<!-- Blog Title -->
		{#if title}
			<h2 class="text-3xl font-semibold mt-4 text-gray-900">{title}</h2>
		{/if}
		{#if date}
			<p class="text-sm text-gray-400">Published on {date}</p>
		{/if}

		<!-- Preview Text -->
		{#if previewText}
			<p class="text-lg text-gray-700 mt-2">{previewText}...</p>
		{/if}
	</a>
</div>
