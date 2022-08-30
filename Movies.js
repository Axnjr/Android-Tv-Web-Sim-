import React, { useState , useEffect } from 'react'
import "./App.css"
import axios from 'axios';
import Play from "./Play"
export default function Movies() {
    let k=[];let v=[];

    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
           fetchapi(response.data.country_code);
        })};

    const [keyss,setKeyss] = useState([])
    const [val,setVal] = useState([])

    const fetchapi = (user_location) => {
      let api_key = "AIzaSyAKIqStb_x-AXFvjjPbyPDqDQ_CuhV5zk4";
      let video_http = "https://www.googleapis.com/youtube/v3/videos?";
      fetch(video_http + new URLSearchParams({
          key: api_key,
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 8, 
          regionCode: user_location,
      }))
      .then(res => res.json())
      .then(data => {
        for(let i=0;i<7;i++){
            k[i] = data.items[i].snippet.thumbnails.high.url
            v[i] = "https://www.youtube.com/watch?v="+data.items[i].id}
        setKeyss(k);setVal(v);
        })}
    useEffect(()=>{
      getGeoInfo()
    },[])
    return(
        <>
            <h1 style={{marginLeft:'1rem',marginTop:'3rem'}}>Netfix Recomended</h1>
            <div id='netflix' style={{display:'flex',marginTop:'1rem',overflowX:'scroll',paddingBottom:'1rem'}}>
                <img id='[2,0]' src='https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUTSTBHJtyRpxe4yDRthHk2z5DZGgzZruGHtjblrso6HIPTQnsJ553rmmfw6yZKzKiSPuwQKgcik9hV2xX8Ev3Zx1_ISiPEFxOq44fC5iKUFLkt54R1zioijsi1npgJC5L9_7w.jpg?r=019' alt='' width='350' height='220' style={{borderRadius:'0.7rem',marginInline:'0.7rem'}} onClick={()=>{window.location.assign("https://www.netflix.com/in/title/81186049")}}/>
                <img id='[2,1]' src='https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXYEoxpzQ8fVbAeCnBeAh4BQLMV9hACVwXa8s1WRYdNTebLAkQ6FD_05G4QupbPbbLRyMAuPCYpMVoACvIFwOJBXLaa_vJiTWrorzcZQdehTA2WA4aFTeh3hFt4EuXf8Y2Cpzw.jpg?r=68e' alt='' width='350' height='220' style={{borderRadius:'0.7rem',marginInline:'0.7rem'}} onClick={()=>{window.location.assign("https://www.netflix.com/in/title/81050546")}}/>
                <img id='[2,2]' src='https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfb37ZQpbjebzFvSUIDMXNsQRiZa58GN_BBsFjx_NiDqq4jo5Yq0Gk-grZ5RZ5P4EoT5hld5_bv_1w_OlpjiXKHjCvThxmK-hEy9hAq2ixP8kFUd4iSh_Ako1aNvlFZuZ4IsaQ.jpg?r=fb8' alt='' width='350' height='220' style={{borderRadius:'0.7rem',marginInline:'0.7rem'}} onClick={()=>{window.location.assign("https://www.netflix.com/in/title/81160697")}}/>
                <img id='[2,3]' src='https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXtJ-VF1lPF2XSZNCTr1axI3K-TM-MXulybr9AEd9ig4BsWCTtLehu1eqrvEwrcQGt8oat86ojoJtsBhiP4XLLHA4CYxKO_lxU41.jpg?r=b94' alt='' width='350' height='220' style={{borderRadius:'0.7rem',marginInline:'0.7rem'}} onClick={()=>{window.location.assign("https://www.netflix.com/in/title/81073593")}}/>
                <img id='[2,4]' src='https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb5YpyBgmnbRzzj6T9XFKsI61FMYT5UKW1dMNChU42EiOUqOm2wm1zNXIt5bi7mFLhs7iNcrpgn2lZIVQL0Z5HRMITj9xUSh1NBf.jpg?r=e27' alt='' width='350' height='220' style={{borderRadius:'0.7rem',marginInline:'0.7rem'}} onClick={()=>{window.location.assign("https://www.netflix.com/in/title/81199140")}}/>
                <img id='[2,5]' src='https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS9tK-V5mgoqU-iPIItVrNcXpo6z9ctEJI8K_XKjNNrsTWIIbHfH849XN_48Nk5mGPO1-Ywf51hKSO4c82vU4bDgW8PPaE4RQ9iAD95vA-_d2G6IOn0f5xDomYlr_o0J1OgSgg.jpg?r=2c4' alt='' width='350' height='220' style={{borderRadius:'0.7rem',marginInline:'0.7rem'}} onClick={()=>{window.location.assign("https://www.netflix.com/in/TITLE/81018682")}}/>
                <img id='[2,6]' src='https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS6dvgT0Tf2HvYo3TzQjoSNvAxrpH6Z0tC21mzlq2Cip1nxsXhcenO832Vf_Us9Igx5GmtGRmu6YQ5_U6Fs4JpRzYudiJ8kWN_pInpTYFk-A8T_PwlDJCmMAGE6b9stnWBD1jw.jpg?r=ca1' alt='' width='350' height='220' style={{borderRadius:'0.7rem',marginInline:'0.7rem'}} onClick={()=>{window.location.assign("https://www.netflix.com/in/title/81397579")}}/> 
            </div>

            <Play/>

            <h1 style={{marginTop:'2rem'}}>YouTube Trending</h1>
            <div id='youtube' style={{display:'flex',overflowX:'scroll'}}>
                {
                    keyss.map((value,id)=>{
                        return(                       
                            <div style={{display:'grid',textAlign:'center',cursor:'pointer'}} key={id} onClick={()=>{window.location.assign(`${val[id]}`)}}>
                                <img id={`[4,${id}]`} src={value}  style={{marginInline:'0.5rem',marginBottom:'1rem'}}
                                width='350' height='220' alt=''></img>
                            </div>                           
                        )
                    })
                }
            </div>
        </>
           )
}
/**  */