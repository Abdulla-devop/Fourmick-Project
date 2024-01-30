import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"
import { addNewAuthor } from "./hepler/helper";
import { autSchema } from "./hepler/schema";

export default function AddAuthor({authorData,setauthorData}){
    //using navigate
    const navigate = useNavigate();
   
    //using fourmick functionalities for adding data
    const {values, handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
        initialValues:{
            title:"",
            name:"",
            DOB:"",
            Bio:"",
            ISBN:"",
            DP:"",
        }, 
        //added schema & sunbmit function
        validationSchema:autSchema,
        onSubmit:(addedAuthor) => {
            addNewAuthorDetails(addedAuthor)
        },
    });
    //adding data in api function
    const addNewAuthorDetails =(addingAuthor) =>{
        addNewAuthor(addingAuthor).then((data) => {
            if(data){
                setauthorData([...authorData,addingAuthor]);
                  navigate("/");
                 }else{
                     console.log("Error in Adding Author")
                 }
        });   
     }
    
    return(
        // adding input data
        <div className="w-full bg-primary">
             <form className="grid grid-rows-4 justify-center gap-4"
              onSubmit={handleSubmit}
             >
                <input
                type="text"
                placeholder="Enter title"
                className="input input-bordered w-80" 
                value={values.title}
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.title && errors.title?(
                <div className="text-red-300">{errors.title}</div>):("")}
                  <input
                type="text"
                placeholder="Enter Author Name"
                className="input input-bordered w-80" 
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.name && errors.name?( 
                <div className="text-red-300">{errors.name}</div>):""}
                  <input
                type="text"
                placeholder="Enter Author Date of Birth"
                className="input input-bordered w-80" 
                value={values.DOB}
                name="DOB"
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {/* using touched to show error comments */}
                {touched.DOB && errors.DOB?(
                <div className="text-red-300">{errors.DOB}</div>):""}
                   <input
                type="text"
                placeholder="Enter About Author"
                className="input input-bordered w-80"
                value={values.Bio}
                name="Bio"
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                 {touched.Bio && errors.Bio?(
                 <div className="text-red-300">{errors.Bio}</div>):""}
                    <input
                type="text"
                placeholder="Enter ISBN Number"
                className="input input-bordered w-80"
                value={values.ISBN}
                name="ISBN"
                onChange={handleChange} 
                onBlur={handleBlur}
                />
                 {touched.ISBN && errors.ISBN?(
                 <div className="text-red-300">{errors.ISBN}</div>):""}
                    <input
                type="text"
                placeholder="Enter Date of Publication"
                className="input input-bordered w-80"
                value={values.DP}
                name="DP"
                onChange={handleChange}
                onBlur={handleBlur} 
                />
                {touched.DP && errors.DP?(
                <div className="text-red-300">{errors.DP}</div>):""}
         <div className="card-actions justify-center gap-4 p-2">
             {/* used submit for adding author */}
            <button className="click btn bg-warning gap-4"
            type="Submit">Add Author</button>
            </div>
             </form>
        </div>
    )
}