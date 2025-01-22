<script lang="ts">

	import ResultBox from '$lib/ResultBox.svelte';
import type { PageData } from './$types';

let { data }: { data: PageData } = $props();

function searchByName(name: string){
   
  return data.items.filter((animal) => animal.name.includes(name));
}
let searchAnimal = $state('')
let searchClass = $state('')
let filteredAnimals: any[] = $state([])
$effect(() => {
   filteredAnimals = searchByName(searchAnimal)
})
</script>
<div class="text-black">
<select bind:value={searchClass}>
{#each data.unique_classes as cls}
   <option>{cls}</option>
   {/each}
</select>
</div>
<!--dodaj search-->
<div class="flex justify-center text-black">
<input placeholder="Search animal by name" class="rounded-xl m-2 p-2" bind:value={searchAnimal} type="text"/>
</div>
<div class="flex justify-center gap-2">
{#each filteredAnimals as animal}
 <ResultBox>
    <h2 class="pb-0">{animal.name}</h2>
    <p class="text-sm italic pb-2">{animal.latinName}</p>
    <img alt={animal.name} class="rounded-md" src="http://127.0.0.1:8090/api/files/{animal.collectionId}/{animal.id}/{animal.image}">
    <ResultBox><p>Weight: {animal.weight}kg</p></ResultBox>
    <ResultBox><p>Lifespan: {animal.lifespan} years</p></ResultBox>

 </ResultBox>
{/each}
</div>