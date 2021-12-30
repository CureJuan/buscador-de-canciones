import React from 'react'
import { useParams } from 'react-router-dom';
import SongDetails from './SongDetails'

const SongPage = ({mySongs}) => {
    let {id} = useParams();

    let currentSong = mySongs[id];
    let {search, lyric, bio} = currentSong;

    return <SongDetails search={search} bio={bio} lyric={lyric}/>;
}

export default SongPage
