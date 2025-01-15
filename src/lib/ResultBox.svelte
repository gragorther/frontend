<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="border-2 border-pink-400 rounded-2xl max-w-xs overflow-auto p-4">
	<div class="flex flex-col items-center text-center">
		{@render children?.()}
	</div>
</div>
