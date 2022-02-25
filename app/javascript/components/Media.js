import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { deployUrl } from '../config/app.config';
import './Media.css';

export default function Media({ media, favorite = false, id=0 }) {
  const toggleFavorites = (omdbId, favorite, id) => {
    const data = { "favorite": {"omdbid": omdbId} };
    const url = id > 0 ? deployUrl+'/favorites/'+id+'.json' : deployUrl+'/favorites.json';

    fetch(url, {
      method: favorite ? 'DELETE' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

    return(
      <Card>
        <Box className="MediaInfo">
          <CardContent>
            <Typography variant="h5">
              {media.Title}
            </Typography>
            <Typography className="TypeText">
              {media.Type} - {media.Year}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          className="Poster"
          component="img"
          image={media.Poster}
          alt="Poster"
        />
        <CardActions>
          <Button size="small" onClick={() => toggleFavorites(media.imdbID, favorite, id)} value={media.imdbID}>{favorite ? 'Remove favorite' : 'Add to favorites'}</Button>
        </CardActions>
      </Card>
    )
}