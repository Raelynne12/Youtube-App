import React,{useState, useEffect} from 'react'
import axios from "axios"

export default function List() {

    const [videoList, setVideoList] = useState([])
    useEffect(() => {
    axios
    .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=오버워치&key=AIzaSyAcviy1_e7HYUrBhYojp9wDXtcm4iivsik`)
    .then(((res) => {
        setVideoList(res.data.items)
        console.log(res.data.items)
    }))
    },[])
    
  return (
    <div>
        {videoList.map((item, idx) => {
            return(
                    <iframe 
                    className='iframe'
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${item.id.videoId}`} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
            )
        })}
    </div>
  )
}
