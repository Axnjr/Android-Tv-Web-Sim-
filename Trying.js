import React from 'react'
import Divs from './Divs'
import Nav from './Nav'
import Movies from './Movies';
import "./App.css";
import { Howl } from 'howler';
import bruh from "./effect.wav"

export default function Trying() {
    const sound_src = bruh
    function sound_play(src){
        const sound = new Howl({
            src,
            html5:true,
        });
        sound.play()
    }
    let Xcor = 0;let Ycor = 1
    document.addEventListener('keydown', function(event){
        if(Ycor===0){
            let com = document.getElementById(`[${Ycor},${Xcor}]`)
            if(com.tagName==='H1'){
                com.style.backgroundColor = "black"
                com.style.color = '#C0C0C0'
                com.style.borderRadius = 'none'
                com.style.padding = '0px'
            }
            else{com.style.borderBottom = 'none'}
        }
        if(Ycor===1){
            let com = document.getElementById(`[${Ycor},${Xcor}]`)
            com.style.width = '140px'
            com.style.height = '80px'
        }
        if(Ycor===2){
            let com = document.getElementById(`[${Ycor},${Xcor}]`)
            if(com.tagName==='IMG'){
                com.style.width = '21.875rem'
                com.style.height = '13.75rem'
            }      
        }
        if(Ycor===3){
            let com = document.getElementById(`[${Ycor},${Xcor}]`)
            com.style.width = "150px"
            com.style.height = "200px"           
        }
        if(Ycor===4){
            let com = document.getElementById(`[${Ycor},${Xcor}]`)
            com.style.width = "350px"
            com.style.height = "220px"
        }
        if(event.key === 'ArrowUp'){
            Ycor--;
            if(Ycor<0){Ycor=4}
            sound_play(sound_src);
        }
        if(event.key === 'ArrowDown'){
            Ycor++;
            if(Ycor>4){Ycor=0}
            sound_play(sound_src);
        }
        if(event.key === 'ArrowRight'){ 
            sound_play(sound_src);        
            Xcor++;
            if(Xcor>6){Xcor=0;}                               
            if(Ycor===0){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                if(com.tagName==='H1'){
                    com.style.backgroundColor = "white"
                    com.style.color = 'black'
                    com.style.borderRadius = '9999%'
                    com.style.padding = '10px'
                }
                else{com.style.borderBottom = '2px solid white'}            
            }
            if(Ycor===1){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                com.style.width = '150px'
                com.style.height = '90px'
            }
            if(Ycor===2){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                if(com.tagName==='IMG'){
                    com.style.width = '370px'
                    com.style.height = '240px'
                    let netflix = document.getElementById('netflix')
                    netflix.scrollBy(150,0)
                }         
            }
            if(Ycor===3){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                com.style.width = "170px"
                com.style.height = "220px"
            }
            if(Ycor===4){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                com.style.width = "370px"
                com.style.height = "240px"
                let youtube = document.getElementById('youtube')
                youtube.scrollBy(150,0)
            }
        }
        if(event.key==='ArrowLeft'){ 
            sound_play(sound_src);         
            Xcor--;
            if(Xcor<0){Xcor=6;}
            if(Ycor===0){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                if(com.tagName==='H1'){
                    com.style.backgroundColor = "white"
                    com.style.color = 'black'
                    com.style.borderRadius = '9999%'
                    com.style.padding = '10px'
                }
                else{com.style.borderBottom = '2px solid white'}
            }
            if(Ycor===1){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                com.style.width = '150px'
                com.style.height = '90px'
            }
            if(Ycor===2){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                if(com.tagName==='IMG'){
                    com.style.width = '370px'
                    com.style.height = '240px'
                    let netflix = document.getElementById('netflix')
                    netflix.scrollBy(-150,0)
                }           
            }
            if(Ycor===3){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                com.style.width = "170px"
                com.style.height = "220px"
            }
            if(Ycor===4){
                let com = document.getElementById(`[${Ycor},${Xcor}]`)
                com.style.width = "370px"
                com.style.height = '240px'
                let youtube = document.getElementById('youtube')
                youtube.scrollBy(-150,0)
            }
        }
        if(event.key === "Alt"){         
            let com = document.getElementById(`[${Ycor},${Xcor}]`);com.click()    
        }
        if(event.key === 'Escape'){
            window.location.reload()
        }
        if(event.ctrlKey){
            if(document.getElementById("after_search").style.display!=='none'){
            let mike = document.getElementById('speak');mike.click();}else{}
        }
        if(event.shiftKey){
            if(document.getElementById("after_search").style.display!=='none'){
            let mike = document.getElementById('type');mike.click()}else{}
        }
    })
    return (
        <>
            <Nav/>
            <Divs/>
            <Movies/>
        </>
      )
}
