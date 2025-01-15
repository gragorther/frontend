import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {

    const {pb} = locals

    const resultList = await pb.collection('animals').getList(1, 50, {
    });
    

    return {
        items: resultList
    }
};