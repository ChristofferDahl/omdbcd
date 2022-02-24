import React, { useState, useEffect } from 'react';
import Media from './Media';

export default function Favorites({id}) {
    const [favorite, setFavorite] = useState({});

    useEffect(() => {
        const getFavorite = async () => {
            const response = await fetch('http://localhost:3000/getMedia?omdbId='+id);
            const data = await response.json();
            setFavorite(data);
        }
        
        getFavorite();
    }, []);

    return(
        <>
            <Media media={favorite} favorite={false} />
       </>
    );
}