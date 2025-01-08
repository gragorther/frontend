import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {

    const {pb, user} = locals

    if (!user?.id) return {
        items: []
    }

    const resultList = await pb.collection('todo').getList(1, 50, {
    });

    return {
        items: resultList
    }
};