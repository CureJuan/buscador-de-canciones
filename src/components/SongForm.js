import React, { useState } from "react"
import "./SongForm.css"

const initialForm = {
    artist:"",
    song:""
}

const SongForm = ({handleSearch, handleSaveSong}) => {
    const [form, setForm] = useState(initialForm);
    const [isDisabled, setIsDisable] = useState(true);
    
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    };
    
    const handleSubmit = (e)=>{
       e.preventDefault();

       if (!form.artist || !form.song){
           alert("Datos Incompletos");
           setIsDisable(true);
           return;
       };
       handleSearch(form);
       setForm(initialForm);
       setIsDisable(false);
    };

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <span>
               <input className="datos"
               type="text"
               name="artist"
               placeholder="Nombre del interprete"
               onChange={handleChange}
               value={form.artist}
               />
               </span>
               <span>
               <input className="datos"
               type="text"
               name="song"
               placeholder="Nombre de la cancion"
               onChange={handleChange}
               value={form.song}
               />
               </span>
               <span>
               <input className="enviar" type="submit" value="Buscar"/>
               </span>
               <span>
               <input className="grabar" type="button" onClick={handleSaveSong} value="Agregar a Favoritos" disabled={isDisabled && "disabled"}/>
               </span>
           </form>
        </div>
    )
}

export default SongForm