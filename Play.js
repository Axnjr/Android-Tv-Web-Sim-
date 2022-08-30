import React, { useState } from 'react'
export default function Play() {
    let k=[];let n=[];let v=[];
    const [price,SetPrice] = useState([])
    const [name,setName] = useState([])
    const [keyss,setKeyss] = useState([])
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    showMovies(apiUrl);
    function showMovies(url){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            for(let i=0;i<7;i++){
                k[i] = IMGPATH + data.results[i].poster_path;
                n[i] = data.results[i].title
                v[i] = data.results[i].vote_average
            }
            setKeyss(k);setName(n);SetPrice(v)
    })}
    
    return(
        <>
            <h1>Google Play <span style={{color:'red'}}>Movies & TV</span></h1>
            <div style={{display:'flex',overflowX:'scroll'}} >
                {keyss.map((val,idx)=>{
                    return(   
                        <footer key={idx} onClick={()=>{window.location.assign("https://play.google.com/store/movies?gl=us")}}>
                            <img id={`[3,${idx}]`} width='150' height='200' style={{marginInline:'0.5rem'}} src={val} alt=''/>
                            <p style={{paddingInline:'0.5rem'}}>{name[idx]}</p>
                            <p style={{paddingInline:'0.5rem',color:'red'}}>${price[idx]*2.5}</p>
                        </footer>                  
                    )
                })}
            </div>
        </>
    )

}