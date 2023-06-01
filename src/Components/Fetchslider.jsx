import React, { useEffect, useState } from 'react'


function Fetchslider() {
    const[data,setData] = useState([])
    useEffect(()=>{
        fetch("Veritabani.json")
        .then(res => res.json())
        .then(value=>{
            setData(value)
        })
    },[])
    console.log(data)



  return (
    <div>
        {/* {
            data && data.length>0 ? (
                <h2>{data[1].mark}</h2>

            ) :(
                <h2>Veriler Yükleniyor...</h2>
            )
        } */}
    </div>
  )
}

export default Fetchslider