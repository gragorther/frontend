<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

{@render children?.()}
<style lang="postcss">
	:global(body) {
		@apply bg-zinc-900 text-white text-justify;
	}

	/* Target only <p> elements to scale */
	:global(p) {
		@apply text-lg  mx-auto text-justify;
		max-width: 800px; /* Ensure paragraphs scale within a readable width */
		padding: 0 1rem; /* Add horizontal padding for smaller screens */
	}

	:global(h1) {
		@apply bg-gradient-to-r text-transparent bg-clip-text font-extrabold mx-auto my-5 text-center p-2 text-4xl lg:text-6xl from-pink-500 to-violet-500 leading-relaxed;
	}

	:global(a) {
		@apply text-lg lg:text-xl text-blue-600 hover:text-blue-400;
	}

	:global(h2) {
		@apply bg-gradient-to-r text-transparent bg-clip-text font-extrabold mx-auto my-5 text-center p-2 text-3xl lg:text-4xl from-orange-500 to-pink-700 leading-relaxed;
	}

	/* Ensure nav buttons remain the same */
	:global(.nav-button) {
		@apply border-solid border-white border-2 rounded-sm bg-red-600 p-3 text-center hover:bg-red-400 text-white;
		width: auto;
	}

	/* Keep pill buttons unaffected */
	:global(.pill-button) {
		@apply text-white hover:text-white bg-purple-400 rounded-full px-4 py-2 hover:bg-purple-500;
	}

	/* List and Navigation adjustments */
	:global(ul) {
		@apply content-center flex flex-wrap justify-center gap-2;
	}

	:global(li) {
		@apply mx-4 text-lg;
	}
</style>