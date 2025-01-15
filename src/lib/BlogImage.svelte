<script lang="ts">
	interface Props {
		src?: string; // The image source
		alt?: string; // Alternative text for the image
		maxWidth?: string; // Optional maximum width for the image
	}

	let { src = '', alt = '', maxWidth = '800px' }: Props = $props();
</script>

<div class="flex justify-center items-center my-4">
	<img
		{src}
		{alt}
		class="rounded-lg shadow-lg w-full max-w-full object-contain"
		style={`max-width: ${maxWidth};`}
		loading="lazy"
	/>
</div>
