import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Media({ media }) {
    const addToFavorites = (id) => {
        const data = { "favorite": {"omdbid": id} };

        fetch('http://localhost:3000/favorites.json', {
            method: 'POST',
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
        <Card sx={{ minWidth: 275 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Media
            </Typography>
            <Typography variant="h5" component="div">
                {media.Title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {media.Type}
            </Typography>
            <Typography variant="body2">
                {media.Year}
            </Typography>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            sx={{ width: 120, paddingLeft: 2 }}
            image={media.Poster}
            alt="Poster"
        />
        <CardActions>
        <Button size="small" onClick={() => addToFavorites(media.imdbID)} value={media.imdbID}>Add to favorites</Button>
        </CardActions>
      </Card>
    )
}