// import { useState } from "react"

// const FormHandling = () => {

//     // const [uname,setUname]=useState('');
//     // const [pass,setPass]=useState('');
//     const [formData,setFormData]=useState({
//         fname:"",
//         pass:""
//     });

//     const handleSubmit=(e)=>{
//         // console.log(uname,pass);
//         e.preventDefault();
//         console.log("Form Data:",formData);
//     }
//     const handleInpUpdate=(e)=>{
//         // console.log(e);
//         // console.log(e.target);
//         const {name,value}=e.target;
//         // console.log(name+" : "+value);
//         setFormData({
//             ...formData,
//             [name]:value
//         });
//         // console.log(formData);
//     }

//     return (
//         <div className="flex justify-center align-middle">
//             <form action="" method="get" onSubmit={handleSubmit} autoComplete="off"> <br />
//                 <label htmlFor="fname">Username :</label> <br />
//                 <input type="text" id="fname" onChange={handleInpUpdate} className="bg-white text-black" name="fname" value={formData.fname}/> <br />
//                 <label htmlFor="pass">password :</label> <br />
//                 <input type="text" id="pass" onChange={handleInpUpdate} className="bg-white text-black" name="pass" value={formData.pass}/> <br />
//                 <input type="submit" value={"submit form"} className="bg-white text-black p-2 mt-2"/>
//             </form>
//         </div>
//     )
// }

// export default FormHandling


// import { useEffect, useState } from 'react'
// const FormHandling = () => {

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: ""
//     });
//     let [formErr, setFormErr] = useState({
//         nameErr: "",
//         emailErr: "",
//         phoneErr: ""
//     });

//     useEffect(() => {
//         console.log(formData);
//         console.log(formErr);
//     }, [formData, formErr])

//     const updateFormData = (e) => {
//         // console.log(e);
//         const { name, value } = e.target
//         // console.log(name+":",value);
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//         // console.log(formData);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         let errors = {};

//         if (formData.name === "" || formData.name === null) {
//             errors.nameErr = "Please input the name!";
//         }
//         if (formData.email === "" || formData.email === null) {
//             errors.emailErr = "Please input the email!";
//         }
//         if (formData.phone === "" || formData.phone === null) {
//             errors.phoneErr = "Please input the phone!";
//         }
    
//         setFormErr((prevErr) => ({
//             ...prevErr,
//             ...errors
//         }));
    
//         // If there are no errors, proceed with form submission logic
//         if (Object.keys(errors).length === 0) {
//             // Perform form submission logic here
//             console.log("Form submitted successfully!");
//         }
//     }
//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit}>
//                 Name  : <input type="text" name="name" onChange={updateFormData} className="bg-white text-black"/><span style={{ color: "red" }}>{formData.name==="" ? formErr.nameErr : ""}</span> <br />
//                 email : <input type="text" name="email" onChange={updateFormData} className="bg-white text-black"/><span style={{ color: "red" }}>{formData.email==="" ? formErr.emailErr :""}</span> <br />
//                 phone : <input type="text" name="phone" onChange={updateFormData} className="bg-white text-black"/><span style={{ color: "red" }}>{formData.phone==="" ? formErr.phoneErr :""}</span> <br />
//                 <button type="submit" className="bg-white text-black p-2 mt-2">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default FormHandling
import { useForm } from 'react-hook-form';

export default function FormHandling() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      Name :<input {...register('name',{required:true})} className="bg-white text-black mt-1" /> {errors.name && <span>Name is required.</span>}<br />
      Email:<input {...register('email', { required: true })} className="bg-white text-black mt-1"/> 
      {errors.email && <span>Email is required.</span>}<br />
      Pass:<input {...register('password', {required:true,pattern:/^[A-Za-z0-9 ]{8,10}$/i})} className="bg-white text-black mt-1"/> 
      {errors.password && <span>Please enter valid password.</span>}<br />
      <input type="submit" className="bg-white text-black p-2 mt-2" />
    </form>
  );
}