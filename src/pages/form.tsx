import React, { useState } from 'react'

function Form() {
    const [errors , setErrors] = useState<any>({})
    const [values, setvalues] = useState<any>({
        name:"",
        email:"",
        password:"",
        cpassword:"",
    })

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        const validationErrors:any = {};
        if(!values.name.trim()){
            validationErrors.name = "Name Must Required"
        }
        if(!values.email.trim()){
            validationErrors.email = "Email Must Required"
        }else if(/\S+@\S\.\S+/.test(values.email)){
            validationErrors.email = "Email Is Not Valid"

        }
        if(!values.password.trim()){
            validationErrors.password = "Password Must Required"
        }else if(values.password.length < 8){
            validationErrors.password = "Password must be atleast 8 Charecters"
            
        }
        if(!values.cpassword.trim()){
        validationErrors.cpassword = "Confirm Password Must Required"
        }
        if(values.cpassword !== values.password){
            validationErrors.cpassword = "Password Not Match"
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            setvalues({
                name:"",
                email:"",
                password:"",
                cpassword:"",
            })
            alert('Form Submitted Successfully');
        }

      
    }


    const handleChange = (e:any) =>{
        const {name, value} =  e.target;
        setvalues({
            ...values, [name] : value
        })
     }
     console.log(values)

  return (
    <div className='max-w-[1300px] mx-auto'>
      <div className='mt-10 max-w-[600px] mx-auto '>
        <h2 className='text-center text-[25px] font-semibold'>Signup here</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 m-3 sm:m-0' action="">
            <input onChange={handleChange} value={values.name} id='name' name='name' className={`${errors.name && 'border-[1px] border-[red]' } bg-[#eeeeee] p-2 rounded-md`} type="text" placeholder='Name' />
            {errors.name && <span className='text-[14px] text-[red]'>{errors.name}</span>}
            <input onChange={handleChange} value={values.email} id='email' name='email' className={`${errors.email && 'border-[1px] border-[red]' } bg-[#eeeeee] p-2 rounded-md`} type="Email" placeholder='Email' />
            {errors.email && <span className='text-[14px] text-[red]'>{errors.email}</span>}
            <input onChange={handleChange} value={values.password} id='password' name='password' className={`${errors.password && 'border-[1px] border-[red]' } bg-[#eeeeee] p-2 rounded-md`} type="password" placeholder='Password' />
            {errors.password && <span className='text-[14px] text-[red]'>{errors.password}</span>}
            <input onChange={handleChange} value={values.cpassword} id='cpassword' name='cpassword' className={`${errors.cpassword && 'border-[1px] border-[red]' } bg-[#eeeeee] p-2 rounded-md`}type="password" placeholder='Confirm Password' />
            {errors.cpassword && <span className='text-[14px] text-[red]'>{errors.cpassword}</span>}
            <button className='bg-[#32a6e0] p-2 text-white rounded-md'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Form
