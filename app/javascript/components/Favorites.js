import React, { useState, useEffect } from 'react';

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
                <>{favorites.map(item => <p><b>Omdbid:</b>{item.omdbid}</p>)}</>
                : <p>No favorites yet!</p>
            }
       </>
    );
}
