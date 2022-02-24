import React, { useState, useEffect } from 'react';
import Favorite from './Favorite';


export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            const response = await fetch('http://localhost:3000/favorites.json')
            const data = await response.json();
            setFavorites(data);
        }
        
        getFavorites();
    }, []);

    return(
        <>
            {favorites ?
                <>{favorites.map(item => <Favorite key={item.id} id={item.id} omdbId={item.omdbid}/>)}</>
                : <p>No favorites yet!</p>
            }
       </>
    );
}
