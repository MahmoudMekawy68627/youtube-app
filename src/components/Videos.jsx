import { Box, Stack } from '@mui/material';
import React from 'react'
import { VideoCard, ChannelCard, Loader } from './'

const Videos = ({ videos, direction }) => {
    if(!videos?.length) return <Loader/>
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center'  columnGap={1} rowGap={1}>
            {
                videos.map((video, index) => (
                    <Box key={index}>
                        {video.id.videoId && <VideoCard video={video}/>}
                        {video.id.channelId && <ChannelCard channelDetails={video} />}
                    </Box>
                ))
            }
        </Stack>
    )
}

export default Videos