<script lang="ts">
	import { copy } from 'svelte-copy';
	import DualImage from './DualImage.svelte';
	import { Copy } from 'lucide-svelte';
	interface Props {
		qr?: string;
		address?: any;
		logo?: string;
		children: any;
		text?: string;
	}

	let { qr = '', children, logo, address, text }: Props = $props();
	let copytext = $state('Copy address');
	function changetext() {
		copytext = 'Address copied!';
		setTimeout(function () {
			copytext = 'Copy address';
		}, 1000);
	}
</script>

<div
	class="flex flex-wrap flex-col gap-6 justify-center items-center border-pink-600 border-2 p-2 rounded-lg"
>
	<DualImage size="size-9" imgSrc={logo}><h2 class="m-0 p-0">{@render children?.()}</h2></DualImage>
	{#if text}
		<p>{text}</p>
	{/if}
	<div class="flex flex-row flex-wrap gap-2">
		<!--for the buttons-->
		{#if qr}
			<a
				href={qr}
				class="text-white hover:text-white bg-purple-400 text-base rounded-full p-2 hover:bg-purple-500"
				>QR code</a
			>
		{/if}
		{#if address}
			<button
				class="text-white hover:text-white bg-purple-400 text-base rounded-full p-2 hover:bg-purple-500 flex flex-row"
				use:copy={address}
				onclick={changetext}><Copy class="size-5" />{copytext}<Copy /></button
			>
		{/if}
	</div>
</div>
