import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/FetchFromApi';
import { Loader, Videos } from './';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log(searchTerm);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))


  }, [searchTerm])

  if (videos.length === 0) return <Loader />


  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="white" mb={7} ml={{ sm: "100px" }} textAlign='center'>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex" >
        <Box justifyContent='center' alignItems='center' />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default SearchFeed