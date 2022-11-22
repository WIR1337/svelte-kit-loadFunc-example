/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
    let lang = url.searchParams.get('lang');
    let q = url.searchParams.get('q');
    return { id: params.id };
}