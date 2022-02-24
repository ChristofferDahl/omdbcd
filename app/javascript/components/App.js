import React from 'react';
import Typography from '@mui/material/Typography';
import Search from './Search';
import Favorites from './Favorites';

export default function App() {
    return(
        <div>
            <Typography variant="h1">OMDBCD</Typography>
            <Typography variant="h2">Favorites</Typography>
            <Favorites />
            <Typography variant="h2">Search</Typography>
            <Search />
        </div>
    );
}

