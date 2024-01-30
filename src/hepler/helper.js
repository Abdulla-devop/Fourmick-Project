import { API } from "./API";
//functionalities of get,put,post && delete from api

export async function getAllAuthor(){
    const res = await fetch(API,{
       method : "GET",
    });
    const data = await res.json();
    return data
}

export async function deleteAuthorDetails(id){
    const res = await fetch(`${API}/${id}`,{
        method:"DELETE",
        header:{
            "Content-type":"application/json"
        }
    });
    const data = await res.json();
    return data;
}

export async function addNewAuthor(newAuthor){
    const res = await fetch(`${API}`,{
        method:"POST",
        body:JSON.stringify(newAuthor),
        headers:{
              "Content-type":"application/json",
        },
    });
    const data = await res.json();
    return data;
}

export async function editAuthorDetails(id,editAu){
    const res = await fetch (`${API}/${id}`,{
        method:"PUT",
        body:JSON.stringify(editAu),
        headers:{
            "Content-type":"application/json",
        },
    });
    const data = await res.json();
    return data
}