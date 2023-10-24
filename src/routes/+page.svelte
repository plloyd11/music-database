<script>
	import Hero from '../components/Hero.svelte';
	export let data;

	let albums = data.albums.records;
	let filterActive = false;

	// filter by abc order of Band
	albums.sort((a, b) => {
		if (a.fields.Band < b.fields.Band) {
			return -1;
		}
		if (a.fields.Band > b.fields.Band) {
			return 1;
		}
		return 0;
	});
</script>

<main>
	<Hero title="Riffs of 2023" />
	<section class="px-4 mx-auto lg:px-6 max-w-7xl">
		<button class="block mx-auto text-xl" on:click={() => (filterActive = !filterActive)}>
			{filterActive ? 'Gimme ALL the riffs' : "Hit me with the fuckin' best shit 🔥"}
		</button>
		<div class="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
			{#if albums}
				{#each albums.filter((album) => album.fields && album.fields.Artwork && album.fields.Artwork.length > 0 && album.fields['Album Title'] && album.fields.Band && (!filterActive || (filterActive && album.fields.Rating >= 9))) as album}
					<div class="relative flex flex-col gap-2 card card-hover !bg-surface-800">
						<a href={album.fields['Music Link']} target="_blank" rel="">
							<img
								src={album.fields.Artwork.length > 0 ? album.fields.Artwork[0].url : 'default.jpg'}
								alt={album.fields['Album Title']}
								class="rounded-tl-container-token rounded-tr-container-token"
							/>
						</a>
						<div class="p-5 space-y-6">
							{#if album.fields.Rating}
								<span class="text-lg text-surface-300">⚔️ {album.fields.Rating} out of 10 ⚔️</span>
							{:else}
								<span class="italic text-primary-300">Not yet rated</span>
							{/if}
							<div>
								<span class="block text-2xl font-semibold text-surface-200"
									>{album.fields['Album Title']}</span
								>
								<span class="text-lg font-light text-surface-400">{album.fields.Band}</span>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</section>
</main>
