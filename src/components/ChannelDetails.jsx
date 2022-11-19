import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/FetchFromApi';
import ChannelCard from './ChannelCard';
import Loader from './Loader';
import Videos from './Videos';

const ChannelDetails = () => {

  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  if (!channelDetail) return <Loader />

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetails={channelDetail} marginTop="-110px" />
        <Box display='flex' p='2'>
          <Box  />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetails