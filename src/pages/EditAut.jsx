import { useParams } from "react-router-dom";
import WorkSpace from "../workspace";
import { EditAuthor } from "../Edit";

// edit page given inside workspace as children used params to update the selected id
export default function EditAut({authorData,setauthorData}){
    const {id} = useParams();
    return <WorkSpace>
        <EditAuthor 
        authorData={authorData} 
        setauthorData={setauthorData}
        editId={id}/>
    </WorkSpace>
}