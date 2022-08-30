import React, { useState , useEffect } from 'react'
export default function Clock() {
    const [time,setTime] = useState()
    useEffect(()=>{
        setInterval(()=>{
          return(
            setTime(`${new Date().getHours()}:${new Date().getMinutes()}`)
          )
        },100)
      },[])
  return (
    <h1 style={{position:'absolute',right:'6%',marginTop:'13px',fontSize:'2rem'}}>{time}</h1>)}
