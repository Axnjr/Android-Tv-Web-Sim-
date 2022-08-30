import React, { useEffect } from 'react'
import { useVoice } from "./useVoice";
import Clock from "./Clock"
import "./App.css"

export default function Nav() {
    const {  listen } = useVoice();
    useEffect(()=>{
        let setting = document.getElementById("[0,6]")
            setInterval(()=>{
                setting.style.webkitTransform = "scale(1.2)"
                setting.style.transform = "scale(1.2)"
                setTimeout(()=>{
                setting.style.webkitTransform = "scale(1)"
                setting.style.transform = "scale(1)"
                },400)
            },2000)
    },[])

  return (
    <>
        <nav id="nav" style={{display:'flex'}}>
                <div id="after_search" style={{display:'none'}}>
                    <h1 id="speak" 
                    onClick={()=>{
                        listen();
                        let mike = document.getElementById('speak')
                        mike.style.backgroundColor = 'white'
                        mike.style.borderRadius = '9999%'
                        mike.style.padding='10px'
                        mike.style.transition='all 1s ease'
                        setInterval(()=>{
                            mike.style.webkitTransform = "scale(1.1)"
                            mike.style.transform = "scale(1.1)"
                            setTimeout(()=>{
                            mike.style.webkitTransform = "scale(1)"
                            mike.style.transform = "scale(1)"
                            },400)
                        },1000)
                    }} style={{marginTop:'10px',cursor:'pointer',marginLeft:'3rem',textAlign:'center',alignItems:'center',justifyContent:'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" version="1.1" x="0" y="0" viewBox="0 0 296.8 426.4" >
                            <path d="M148.4 276.1c-35.2 0-63.7-28.5-63.7-63.7V63.7C84.7 28.5 113.2 0 148.4 0s63.7 28.5 63.7 63.7v148.7c0 35.2-28.5 63.7-63.7 63.7z" fill="#4285f4"/>
                            <rect x="127.2" y="348.5" width="42.5" height="77.9" fill="#34a853"/>
                            <path d="M254.8 213.2c-.1 58.6-47.8 106.3-106.4 106.3-29.4 0-56.1-12-75.4-31.4l-29.7 29.7c26.9 26.9 64 43.6 105.1 43.6 81.9 0 148.3-66.4 148.4-148.3h-42z" fill="#ea4335"/>
                            <path d="M73 288.1c-19.1-19.2-31-45.7-31-74.9H0C0 254 16.6 291 43.3 317.8L73 288.1z" fill="#fbbc05"/>
                        </svg><p style={{fontSize:'xx-small'}}>Press ctrl to speak</p>
                    </h1>

                    <h1 id='type' onClick={()=>{
                        const g = document.getElementById('___gcse_0');
                        g.style.display='block';
                        document.getElementById('nav').style.display='none'}}
                        style={{marginTop:'10px',cursor:'pointer',marginLeft:'2rem',textAlign:'center'}} >
                        <svg 
                            fill="white" width="30" height="30" 
                            viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-336 82v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm384 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zM122 188v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-98 158v-16c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"/>
                        </svg><p style={{fontSize:'xx-small'}}>Press shift to search</p>
                    </h1>
                </div>

                <div style={{display:'flex'}} id="search"> 
                <svg xmlns="http://www.w3.org/2000/svg" height="50" width="90" version="1.2" viewBox="-76.8 -122.28175 665.6 733.6905"><g transform="translate(0 -11.437)"><circle r="156.268" fill="#4285F4" cy="167.705" cx="156.268"/><path fill="#34A853" d="M512 182.95c0 17.544-14.224 31.762-31.762 31.762s-31.762-14.218-31.762-31.762c0-17.543 14.224-31.762 31.762-31.762S512 165.407 512 182.95z"/><path fill="#EA4335" d="M454.829 260.449c0 35.081-28.438 63.522-63.523 63.522-35.088 0-63.524-28.441-63.524-63.522 0-35.083 28.437-63.524 63.524-63.524 35.086 0 63.523 28.442 63.523 63.524z"/><path fill="#FBBC05" d="M467.533 424.339c0 42.1-34.124 76.225-76.228 76.225-42.104 0-76.229-34.125-76.229-76.225 0-42.098 34.124-76.227 76.229-76.227 42.104 0 76.228 34.129 76.228 76.227z"/></g></svg>
                
                <h3 id='[0,0]' onClick={()=>{
                    document.getElementById('after_search').style.display = 'flex';
                    document.getElementById('search').style.display='none'}} 
                    style={{cursor:'pointer',marginTop:'15px',marginLeft:'-10px'}}>Search</h3>
                </div>

                <h3 id='[0,1]' onClick={()=>{
                window.location.reload()}}
                style={{cursor:'pointer',marginTop:'15px',marginLeft:'2rem'}}>Home
                </h3>

                
                <h3 id='[0,2]' style={{cursor:'pointer',marginTop:'15px',marginLeft:'2rem'}}><a href='#about'>About</a></h3>
                

                <h3 id='[0,3]' style={{cursor:'pointer',marginTop:'15px',marginLeft:'2rem'}}>--></h3>
                <h3 id='[0,4]' style={{cursor:'pointer',marginTop:'15px',marginLeft:'2rem'}}>:)</h3>

                <h1 id='[0,5]' style={{position:'absolute',right:'21%',marginTop:'15px',textAlign:'center',alignItems:'center',justifyContent:'center',display:'flex'}} onClick={()=>{
                    let inputs = document.getElementById("inputs");
                    inputs.style.display = "block"
                }}>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="37" height="37">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                </h1>

                <h1 id='[0,6]' className='setting' onClick={()=>{
                    let setting = document.getElementById("setting");
                    setting.style.display = "block"
                }} style={{position:'absolute',right:'15%',marginTop:'15px',textAlign:'center',alignItems:'center',justifyContent:'center',display:'flex'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="37" height="35" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </h1>

                <Clock/>
            </nav>
    </>
  )
}