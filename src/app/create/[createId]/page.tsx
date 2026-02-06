import Link from "next/link";

export default async function CreateList({
    params,
} :{
    params: Promise<{createId:string}>;

}){
    const{ createId } = await params;
    const displayId = (await params).createId
    return(
        <>
        <h1>Test for {createId}</h1>
        <Link href={`/display/${displayId}`}>View inputted text</Link>
        </>
    )

}