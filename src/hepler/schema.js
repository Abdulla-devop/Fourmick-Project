import * as yup from "yup";
//schema written for each input
export const autSchema = yup.object({
    title:yup.string()
    .required("Please fill the title")
    .min(4,"Minimum three words required"),
    name:yup.string().required("Please fill the name")
    .min(4,"Minimum three words required") .max(10,"First or last name is enough"),
    DOB:yup.string().required("Please fill the Date of Birth"),
    Bio:yup.string().required("Please fill a small bio about author"),
    ISBN:yup.string().required("Please fill the ISBN number"),
    DP:yup.string().required("Please fill the Date of Publication"),
})