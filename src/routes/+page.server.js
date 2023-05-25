/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import { SECRET_AIRTABLE_API } from '$env/static/private';

export async function load({ fetch, setHeaders }) {
	const res = await fetch('https://api.airtable.com/v0/appu60A0INZAOVMPC/2023', {
		headers: {
			Authorization: `Bearer ${SECRET_AIRTABLE_API}`
		}
	});
	const data = await res.json();

	console.log(data);

	if (data.message) {
		throw error(404, `${data.message}. you fucked up dawg!`);
	}

	setHeaders({
		'cache-control': `max-age=3600,`
	});

	return {
		albums: data
	};
}
