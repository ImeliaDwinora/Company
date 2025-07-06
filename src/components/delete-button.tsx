import { Article } from "@/types/articles.type";
import { Dispatch, SetStateAction } from "react";

export default function DeleteButton({objectId,setData}:{objectId:string; setData: Dispatch<SetStateAction<Article[] | null>>; data:Article[]}){
    async function handleDelete(id:string){
        try {
            await fetch(`https://api.backendless.com/9DD390FF-DA25-4714-89C2-FCFF92F80031/D0026FC3-51B6-44BE-98CE-816C8943FBB2/data/articles/${objectId}`,{method:"DELETE"})
            setData((previous)=>{
                if(previous){
                    return previous.filter((article)=> article.objectId !== id)
                }
                return null;
            })
            alert("Item has been deleted")
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <button className="border p-2 rounded-2xl bg-amber-600" onClick={()=>handleDelete(objectId)}> Delete</button>
    )
}