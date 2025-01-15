<script lang="ts">
	interface Props {
		children?: any;
		href?: string;
	}
	let { children, href }: Props = $props();
</script>

<a
	{href}
	class="rounded-lg bg-purple-400 text-xl p-2 text-center hover:bg-purple-700 text-white flex-grow mr-2 sm:text-lg sm:p-3 lg:text-xl lg:p-0 hover:text-white"
	>{@render children?.()}</a
>
