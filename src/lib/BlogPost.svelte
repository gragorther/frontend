<script lang="ts">
	interface Props {
		title: string;
		date: string;
		children?: import('svelte').Snippet;
	}

	let { title, date, children }: Props = $props();
</script>

<div class="prose prose-invert max-w-5xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg font-sans">
	<!-- Blog Post Header -->
	<header class="border-b border-gray-700 pb-4 mb-4">
		<title>Gregtech - {title}</title>
		<h1 class="text-4xl font-bold">{title}</h1>
		<p class="text-sm text-gray-400">
			By Gregor Podjed on {date}. Licensed under
			<a class="text-sm" href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
				>CC BY-SA 4.0</a
			>.
		</p>
	</header>

	<!-- Blog Content -->
	<div>
		{@render children?.()}
	</div>
</div>
