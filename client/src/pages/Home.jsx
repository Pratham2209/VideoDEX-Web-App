import styled from 'styled-components'
import React from 'react'
import Card from '../components/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;

`

export default function Home({type}) {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`) // axios are use to fetch data from "/videos/random" endpoint , beause we have to give random videos (axios.get() method are used to get data )
      setVideos(res.data);   // res.data will setVideos according response from /videos/random
    }
    fetchVideos(); // here we calling function because we cannot give async to useEffect
  }, [type])

  return (
    <Container>
      {videos.map(video => (       // map function are used loop on videos and using card component(number of videos==number of card)
          <Card key={video._id} video={video} />
      ))}

    </Container>
  )
}
