import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='my-4 max-w-[1300px] mx-auto h-screen'>
        <div className='grid grid-cols-[30%_Auto] gap-3'>
            <div className='bg-[#00AEFF] h-[90vh] flex flex-col items-center text-[20px] text-black py-5 rounded-xl'>
            <Link to={'/dashboard/pg1'}>Page 1</Link>
            <Link to={'/dashboard/pg2'}>Page 2</Link>
            <Link to={'/dashboard/pg3'}>Page 3</Link>
            </div>
            <div className='bg-[#00AEFF] h-[90vh] flex justify-center text-[20px] text-black py-5 rounded-xl'>
              <Routes>
                <Route path='pg1' element={<PG1/>} />
                <Route path='pg2' element={<PG2/>} />
                <Route path='pg3' element={<PG3/>} />
              </Routes>
            </div>
        </div>
    </div>
  )
}

function PG1(){
  return<>
  <h2>page 1</h2>
  </>
}
function PG2(){
  return<>
  <h2>page 2</h2>
  </>
}
function PG3(){
  return<>
  <h2>page 3</h2>
  </>
}