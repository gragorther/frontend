<script lang="ts">
	interface Props {
		imgSrc?: string; // Image source URL
		imgAlt?: string; // Alternate text for the images
		children?: any;
		size?: string;
	}

	let { imgSrc = '', imgAlt = '', children, size = 'size-5' }: Props = $props();
</script>

<div class="flex items-center justify-center gap-0">
	<!-- Left Image -->
	<img src={imgSrc} alt={imgAlt} class="ml-1 mr-0.5 object-fill {size} rounded-md" />
	{@render children?.()}
	<!-- Right Image -->
	<img src={imgSrc} alt={imgAlt} class="mr-1 ml-0.5 object-fill {size} rounded-md" />
</div>
