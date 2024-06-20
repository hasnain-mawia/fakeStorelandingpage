import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Get } from '../config/apiInstance'
import CLoader from '../components/CLoader'

function Products() {
  const params = useParams()
  const [model, setModel] = useState<any>(null)
  const getDataByID = (id:any) =>{
   Get(`products/${id ? id : ""}`).then((res)=>{
    console.log(res)
    setTimeout(()=>{
    setModel({...res.data})
    },300)
   }).catch((err)=>{
    console.log(err)
   })

  }
  useEffect(()=>{
    if(params.id){
      getDataByID(params.id)
    }
  },[])
  return model === null ? <CLoader/> : (
      <div className='max-w-[1300px] mx-auto'>
      <div>
       
        <button className='bg-[#4DB8F5] text-white p-3 mt-[20px] rounded-lg' onClick={()=> window.history.back()}>Back</button>
      </div>
   <div className='text-[30px] text-center flex justify-center items-center h-full bg-[green] text-white my-3 rounded'>
      <h2>{model.title}</h2>
      </div>
   <div className='grid grid-cols-[40%_Auto] gap-5'>
        <div>
          <img className='w-[250px] mx-auto' src={model.image} alt="" />
        </div>
        <div className='flex flex-col justify-center '>
            <h2 className='text-[26px]'>{model.title}</h2>
            <h2>{model.description}</h2>
            <h2 className='text-[green] font-bold'>{model.category}</h2>
            <h2 className='text-[red] font-bold'>$ {model.price}</h2>

        </div>
      </div>

    </div>
  )
}

export default Products
