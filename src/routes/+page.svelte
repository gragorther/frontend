<script lang="ts">

	import ResultBox from '$lib/ResultBox.svelte';
import type { PageData } from './$types';

let { data }: { data: PageData } = $props();


</script>

{JSON.stringify(data.items.items)}
<!--dodaj search-->
</select>


<div class="flex justify-center gap-2">
{#each data.items.items as animal}
 <ResultBox>
    <h2 class="pb-0">{animal.name}</h2>
    <p class="text-sm italic pb-2">{animal.latinName}</p>
    <img alt={animal.name} class="rounded-md" src="http://127.0.0.1:8090/api/files/{animal.collectionId}/{animal.id}/{animal.image}">
    <ResultBox><p>Weight: {animal.weight}kg</p></ResultBox>
    <ResultBox><p>Lifespan: {animal.lifespan} years</p></ResultBox>

 </ResultBox>
{/each}
</div>