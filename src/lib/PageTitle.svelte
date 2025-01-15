<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<h1>{title}</h1>
<title>GregTech - {title}</title>
