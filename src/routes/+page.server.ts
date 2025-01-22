import type { PageServerLoad } from './$types';
import type {AnimalsRecord} from "$lib/pocketbase-types.ts";
import type { ListResult } from 'pocketbase';


export const load: PageServerLoad = async ({ params, locals }) => {

    const {pb} = locals

    const resultList = await pb.collection('animals').getList(1, 50, {
    }) as ListResult<AnimalsRecord>;
    
    console.log(resultList)

    const unique_classes: string[] = []
    for(let x of resultList.items){
        if(!x.class) continue

        if(!unique_classes.includes(x.class)){
            unique_classes.push(x.class);
        }
        
    }
    console.log(unique_classes)

    return {
        items: resultList.items, unique_classes
    }
};