import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteAuthorDetails } from "./hepler/helper";


export default function Main({authorData,setauthorData}){
  const navigate = useNavigate();
  const [editId,setEditId] = useState("");

  //deleting functionalities
    const deleteAuthor=(id)=>{
      deleteAuthorDetails(id).then((data) => {
        if(data){
          const remainingAuthor = authorData.filter((authorInfo) => authorInfo.id != id);
          setauthorData([...remainingAuthor]);
        }else{
          console.log("Unable to delete doctor details");
        }
      })
    }
    // handling edit navigating to edit page
    const handleEdit=(id)=>{
      navigate(`/editaut/${id}`)
    }
    // functionalities of card details and main page header
    return <div className="main">
     <div className="addcount p-2">
      <div className="grid justify-center">
        <div className="text">
       <h1>Author Details</h1>
       </div>
           </div>
        <button className="btn btn-primary w-24"onClick={()=>navigate("/addaut/")}>Add Author</button>
      </div>
      {authorData && (
        <>{authorData?.map((authorInfo,idx) => (
          <div 
          key={idx}
          className=" hover card card-compact w-96  bg-base-100 p-2 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Title: {authorInfo.title}</h2>
          <h1>Author Name: {authorInfo.name}</h1>
          <p>Date of Birth: {authorInfo.DOB}</p>
          <p>About Author: {authorInfo.Bio}</p>
          <p>ISBN Number: {authorInfo.ISBN}</p>
          <p>Date of Publication: {authorInfo.DP}</p>
      {/* edit & delete buttons */}
          <div className="card-actions justify-end">
            <button className="click btn btn-secondary"onClick={()=>handleEdit(authorInfo.id)}>Edit</button>
            <button className="click btn btn-primary"onClick={()=>deleteAuthor(authorInfo.id)}>Delete</button>
          </div>
        </div>
      </div>
      ))}  
      </>
      )}
    </div>
}