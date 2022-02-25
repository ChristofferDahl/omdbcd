import React, { useState, useEffect } from 'react';
import Media from './Media';
import { deployUrl } from '../config/app.config'

export default function Favorites({ id, omdbId }) {
  const [favorite, setFavorite] = useState({});
  useEffect(() => {
    const getFavorite = async () => {
      const response = await fetch(deployUrl+'/getMedia?omdbId='+omdbId);
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