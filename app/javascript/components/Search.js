import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Search() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const search = async () => {
            const response = await fetch('http://localhost:3000/search?title='+query)
            const data = await response.json();
            setMovies(data.Search);
        }
        if (query !== "") {
            search()
        }
    }, [query])

    return(
        <>
            <TextField
                id="search"
                label="Search"
                type="search"
                variant="standard"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            {movies ?
                <>
                    <Typography variant="h5">Search result</Typography>
                    {movies.map(item => <p>{item.Title}</p>)}
                </> : 
                    <p>No movies found</p>
            }
       </>
    )
}