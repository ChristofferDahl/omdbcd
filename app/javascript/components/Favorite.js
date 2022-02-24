import React, { useState, useEffect } from 'react';
import Media from './Media';

export default function Favorites({ id, omdbId }) {
    const [favorite, setFavorite] = useState({});

    useEffect(() => {
        const getFavorite = async () => {
            const response = await fetch('http://localhost:3000/getMedia?omdbId='+omdbId);
            const data = await response.json();
            setFavorite(data);
        }
        
        getFavorite();
    }, []);

    return(
        <>
            <Media media={favorite} favorite={true} id={id} />
       </>
    );
}