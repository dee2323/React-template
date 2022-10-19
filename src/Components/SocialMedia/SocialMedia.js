import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'
import '../../index.css'
const SocialMedia = () => {
const [social,setSocial]=useState([]);
useEffect(()=>{axios.get('js/data.json').then(res=>setSocial(res.data.social))},[])
const listSocial=social.map((item,index)=>{return(
  <div className={`social ${index===0?'face':(index===1?"twitter":"pin")}`} key={item.id}>
        <i className={item.icon}></i>
        <p>
            <span className="info1">{item.title}</span>
            <span className="info2">{item.body}</span>
        </p>
    </div>
    
)})
  return (
    <div className="social-media">
            
    {listSocial}
</div>
  )
}

export default SocialMedia
