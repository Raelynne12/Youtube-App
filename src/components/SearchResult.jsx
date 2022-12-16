import React,{useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import axios  from 'axios'
//import SearchFinal from './SearchFinal'

export default function SearchResult() {
    const [searchParams,] = useSearchParams()
    console.log(searchParams.get("q"))
    const search = searchParams.get("q")
    const [videos, setVideos] = useState([])
    useEffect(() => {
        axios
        .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=AIzaSyAcviy1_e7HYUrBhYojp9wDXtcm4iivsik`)
        .then((res) => {
            setVideos(res.data.items)
            console.log(res.data.items)
        })
    },[search])
  return (
    <div>
        {videos.map((item, idx) => {
            return(
                    // <SearchFinal id={item} key ={idx}></SearchFinal>
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
