<script lang="ts">
	interface Props {
		href?: string; // The URL to navigate to
		children: any;
	}

	let { href = '', children }: Props = $props();
</script>

<a
	{href}
	class="text-white hover:text-white bg-purple-400 text-base rounded-full p-2 hover:bg-purple-500 flex items-stretch"
	>{@render children?.()}</a
>
