import React, {useState, useEffect} from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp}  from "../helpers/helpHttp"
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404"
import SongTable from "./SongTable";
import SongPage from "./SongPage";
import {TiArrowBackOutline} from 'react-icons/ti'

let mySongInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {

   const [search, setSearch] = useState(null);
   const [lyric, setLiryc] = useState(null);
   const [bio, setBio] = useState(null);
   const [loading, setLoading] = useState(false);
   const [mySongs, setMySongs] = useState(mySongInit);

   useEffect(()=>{
    if (search===null) return;
    
    const fetchData = async()=>{
      const{ artist, song } = search;
      
      let artistUrl =`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl =`https://api.lyrics.ovh/v1/${artist}/${song}`;
    
    //  console.log(artistUrl,songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
          helpHttp().get(artistUrl),
          helpHttp().get(songUrl),
        ]);

        setBio(artistRes);
        setLiryc(songRes);
        setLoading(false);
    };

    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
   },[search, mySongs]);
  
   const handleSearch = (data) => {
 
     setSearch(data);
   };

   const handleSaveSong = () => {
     alert("Salvando cancion en favoritas");
     let currentSong = {
       search,
       lyric,
       bio,
     };

     let songs = [...mySongs, currentSong];
     setMySongs(songs);
     setSearch(null);
     localStorage.setItem("mySongs",JSON.stringify(songs));
   };

   const handleDeleteSong = (id) => {
     let isDelete = window.confirm(
       `¿Estas seguro de eliminar la cancion con el id "${id}`
      ); 

     if (isDelete){
       let songs = mySongs.filter((el, index) => index !== id);
       setMySongs(songs);
       localStorage.setItem("mySongs",JSON.stringify(songs));
     }
   };

    return (
        <div> <HashRouter basename="canciones">
          <Link className="home" to="/"><TiArrowBackOutline fontSize='40px'/></Link>   

          {loading && <Loader/>}
          <article className="grid-1-2">
              <Switch>
                  <Route exact path="/">
                  <SongForm
                   handleSearch={handleSearch}
                   handleSaveSong={handleSaveSong}
                   />
                    <SongTable
                     mySongs={mySongs}
                     handleDeleteSong={handleDeleteSong} />
      
                    {search && !loading && (
                    <SongDetails search={search} bio={bio} lyric={lyric}/>
                     )}
                  </Route>
                  <Route exact path="/:id" children={<SongPage mySongs={mySongs}/>}/>
                  <Route path="*" children={<Error404/>}/>
              </Switch>
          </article>
        </HashRouter>
        </div>
    )
}
export default SongSearch;