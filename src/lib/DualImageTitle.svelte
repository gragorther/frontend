<script lang="ts">
	interface Props {
		title?: string; // Title text
		imgSrc?: string; // Image source URL
		imgAlt?: string; // Alternate text for the images
		headingLevel?: string; // The heading level (e.g., h1, h2, h3)
	}

	let {
		title = '',
		imgSrc = '',
		imgAlt = '',
		headingLevel = 'h2'
	}: Props = $props();
	const imgclass: string = 'h-10 w-10 object-cover';
</script>

<div class="flex items-center justify-center gap-2">
	<!-- Left Image -->
	<img src={imgSrc} alt={imgAlt} class={imgclass} />

	<!-- Title -->
	{#if headingLevel === 'h1'}
		<h1>{title}</h1>
	{:else if headingLevel === 'h2'}
		<h2>{title}</h2>
	{:else if headingLevel === 'h3'}
		<h3>{title}</h3>
	{:else if headingLevel === 'h4'}
		<h4>{title}</h4>
	{:else if headingLevel === 'h5'}
		<h5>{title}</h5>
	{:else if headingLevel === 'h6'}
		<h6>{title}</h6>
	{/if}

	<!-- Right Image -->
	<img src={imgSrc} alt={imgAlt} class={imgclass} />
</div>
