import React from 'react'
import { useHistory } from 'react-router-dom'
import {ImEye} from 'react-icons/im'
import {BsTrash} from 'react-icons/bs'
const SongTableRow = ({id, el, handleDeleteSong}) => {

let history = useHistory();

let {bio, search} = el;
let avatar = bio.artists[0].strArtistThumb;
let avatarStyle={
    width:"auto",
    height:"40px"
}
    return (
        <tr className="tabla">
           <td>
              <img style={avatarStyle} src={avatar} alt={search.artists}/>
            </td> 
           <td>{search.artist}</td><td></td><td></td>
           <td>{search.song}</td><td></td> <td></td>
           <td> 
               <button className="ver" onClick={() => history.push(`/${id}`)}><ImEye/></button>
               <button className="eliminar" onClick={() => handleDeleteSong(id)}><BsTrash/></button>
           </td>
        </tr>
    )
}

export default SongTableRow;