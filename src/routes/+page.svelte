<script>
	import Hero from '../components/Hero.svelte';
	import Star from '../components/Star.svelte';
	export let data;

	let albums = data.albums.records;

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
	<Hero title="2023 Riff Fiesta" />
	<section class="px-4 mx-auto lg:px-6 max-w-7xl">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#if albums}
				{#each albums as album}
					<div class="relative flex flex-col gap-2 card card-hover variant-filled-primary">
						<a href={album.fields['Music Link']} target="_blank" rel="">
							<img
								src={album.fields.Artwork[0].url}
								alt={album.fields['Album Title']}
								class="rounded-tl-container-token rounded-tr-container-token"
							/>
						</a>
						<div class="p-5 space-y-6">
							{#if album.fields.Rating}
								<div class="flex gap-1">
									{#if album.fields.Rating >= 1}<Star shown={true} />{/if}
									{#if album.fields.Rating >= 2}<Star shown={true} />{/if}
									{#if album.fields.Rating >= 3}<Star shown={true} />{/if}
									{#if album.fields.Rating >= 4}<Star shown={true} />{/if}
									{#if album.fields.Rating >= 5}<Star shown={true} />{/if}
								</div>
							{:else}
								<span class="italic text-primary-200">Not yet rated</span>
							{/if}
							<div>
								<span class="block text-2xl font-semibold text-gray-950"
									>{album.fields['Album Title']}</span
								>
								<h4 class="text-lg text-gray-800">{album.fields.Band}</h4>
							</div>
							<!-- <small>{album.fields['Listened?']}</small> -->
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</section>
</main>
