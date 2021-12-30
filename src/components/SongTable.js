import React from "react";
import SongTableRow from "./SongTableRow";

const SongTable = ({mySongs, handleDeleteSong}) => {
  return (
    <div className="listado">
      <h2>Mis Canciones Favoritas</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th colSpan="5">Cancion</th>
            <th colSpan="5">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin Canciones Favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
