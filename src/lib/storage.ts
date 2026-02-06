let textList: Array <{id: string; text: string}> = []
let idCounter = 0;

/* Temporary storage since wala pang backend*/
export function saveText (text: string): string{
    const id = String  (idCounter++)
    textList.push({id,text});
    return id;
}

export function getText (id:string): string | undefined {
    return textList.find((item)=> item.id === id)?.text
}