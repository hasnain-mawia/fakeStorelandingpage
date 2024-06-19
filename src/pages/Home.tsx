import React, { useEffect, useState } from 'react'
import { Get} from '../config/apiInstance'
import { FaStar, FaCartPlus } from "react-icons/fa";
import CLoader from '../components/CLoader';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [productList, setProductList] = useState<any>([])
   
    useEffect(()=>{
    Get('products').then((res:any)=>{
        console.log(res.data)
        setTimeout(()=>{
        setProductList([...res.data])
        },200)
      }).catch((err)=>{
        console.log(err)
      })
    },[])

  return (
    <>
<div className='max-w-[1300px] gap-[20px] flex flex-wrap mx-auto my-3'>
    { productList.length === 0 ? <CLoader/> : 
      productList.map((item:any, i:number)=>{
      return(
      <div key={i} className='shadow-2xl border-[1px] border-[#b5acac] max-w-[230px] rounded-2xl'>
      <img onClick={()=> navigate(`products/${item.id}`)} className='h-[220px] p-3 mx-auto cursor-pointer' src={item.image} alt="" />
    <div className='p-2 bg-[#00AEFF] rounded-2xl'>
    <p className='text-[16px] font-bold'>{item.title.slice(0,22)}...</p>
    <p>{item.description.slice(0,60)}...</p>
    <div className='grid grid-cols-[70%_Auto] mb-[3px] '>
      <p className='text-white'>{item.category}</p>
      <p className='flex items-center bg-black text-[#b6a934] justify-center rounded-3xl'>{item.rating.rate}<FaStar /></p>
    </div>
    <div className='grid grid-cols-[40%_Auto] gap-2'>
      <p className='flex items-center bg-[green] justify-center text-white rounded'>$ {item.price}</p>
      <button onClick={()=> alert(`${item.title}`)} className='flex items-center bg-white p-1 gap-1 rounded'>Add to Card <FaCartPlus className='text-[#00AEFF] text-[18px]'/></button>
    </div>
    </div>
    </div>
       )
      }) 
    }
    </div>
    
    </>
  )
}

export default Home