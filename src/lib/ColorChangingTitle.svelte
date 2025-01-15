<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<h
	class="text-6xl lg:text-7xl from-pink-500 to-violet-500 leading-relaxed bg-gradient-to-r text-transparent bg-clip-text font-extrabold mx-auto my-5 text-center p-2 animate-gradient"
>
	{@render children?.()}
</h>

<style>
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	:global(.animate-gradient) {
		background-size: 300% 300%; /* Expanded size for smoother gradient motion */
		animation: gradient 5s linear infinite; /* Slower and smoother transition */
	}
</style>
