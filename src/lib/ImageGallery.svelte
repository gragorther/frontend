<script lang="ts">
	interface Props {
		images?: { src: string; alt: string }[];
		columns?: number;
	}

	let { images = [], columns = 3 }: Props = $props();
	export const gap: string = '1rem';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
	{#each images as { src, alt }}
		<div class="image-container flex flex-col items-center">
			<a href={src} target="_blank" rel="noopener noreferrer">
				<img
					{src}
					{alt}
					class="rounded-md shadow-md cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105"
					loading="lazy"
				/>
			</a>
			<div
				class="description-box mt-2 p-2 bg-white bg-opacity-10 rounded-md shadow-md text-center w-full"
			>
				<p class="description-text text-sm text-white">{alt}</p>
			</div>
		</div>
	{/each}
</div>
