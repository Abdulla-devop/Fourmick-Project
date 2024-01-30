import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editAuthorDetails } from "./hepler/helper";

export function EditAuthor({authorData,setauthorData,editId}){
  //state to update data for each input
    const [title,setTitle] = useState();
    const [name,setName] = useState();
    const [date,setDate]= useState();
    const [about,setAbout] =useState();
    const [isbn,setIsbn]=useState();
    const [publication,setPublication]=useState();
    const [index,setIndex] = useState();
    //using navigate 
    const navigate = useNavigate();

    //using useeffect to update the information 
    useEffect(()=>{
        const selectedAuthor = authorData.filter((aut) => aut.id == editId)
        const selectedAuthorIndex = authorData.findIndex((aut) => aut.id == editId)
        setIndex(selectedAuthorIndex);
        setTitle(selectedAuthor[0].title);
        setName(selectedAuthor[0].name);
        setDate(selectedAuthor[0].DOB);
        setAbout(selectedAuthor[0].Bio);
        setIsbn(selectedAuthor[0].ISBN);
        setPublication(selectedAuthor[0].DP)
    },[editId])
  

    const updateAuthor=()=>{
     const editedAuthor={
          title:title,
          name:name,
          DOB:date,
          Bio:about,
          ISBN:isbn,
          DP:publication
     };
     //edit data update in api functionalities
     editAuthorDetails(editId,editedAuthor).then((data) =>{
      if(data){
      authorData[index]=editedAuthor
      setauthorData([...authorData]);
      navigate("/")
      } else{
        console.log("Error editing Author")
      }
     })

    }
    return( 
      //input of updating data
    <div className="w-full bg-secondary">
    <form className="grid grid-rows-4 justify-center gap-4">
       <input
       type="text"
       placeholder="Enter title"
       className="input input-bordered w-80" 
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       />
         <input
       type="text"
       placeholder="Enter Author Name"
       className="input input-bordered w-80" 
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />
         <input
       type="text"
       placeholder="Enter Author Date of Birth"
       className="input input-bordered w-80" 
       value={date}
       onChange={(e)=>setDate(e.target.value)}
       />
          <input
       type="text"
       placeholder="Enter About Author"
       className="input input-bordered w-80"
       value={about}
       onChange={(e)=>setAbout(e.target.value)} 
       />
           <input
       type="text"
       placeholder="Enter ISBN Number"
       className="input input-bordered w-80"
       value={isbn}
       onChange={(e)=>setIsbn(e.target.value)} 
       />
           <input
       type="text"
       placeholder="Enter Date of Publication"
       className="input input-bordered w-80"
       value={publication}
       onChange={(e)=>setPublication(e.target.value)} 
       />
    </form>
    {/* update author button */}
    <div className="card-actions justify-center">
   <button className="click btn btn-error m-2"onClick={()=>updateAuthor()}>Update Author</button>
   </div>
</div>
)
}