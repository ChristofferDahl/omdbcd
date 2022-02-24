import React, { useState, useEffect } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import Media from './Media';

export default function Search() {
    const [query, setQuery] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchType, setSearchType] = useState("all");
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const search = async () => {
            const response = await fetch('http://localhost:3000/search?query='+query+'&type='+searchType+'&year='+year)
            const data = await response.json();
            setMovies(data.Search);
        }
        if (query !== "") {
            search();
        }
        setSubmit(false);
    }, [submit]);

    const handleChange = (event) => {
        setSubmit(true);
        setSearchType(event.target.value);
    };

    const handleSubmit = () => {
        setSubmit(true);
    };

    return(
        <>
            <div style={{display: "flex", paddingBottom: 16}}>
                <TextField
                    style={{paddingRight: 8}}
                    id="search"
                    label="Search"
                    type="search"
                    variant="standard"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="button" onClick={handleSubmit}>Search</button>
            </div>
            <div style={{display: "flex", paddingBottom: 16}}>
                <FormControl style={{minWidth: 120 }}>
                    <InputLabel id="search-type">Type</InputLabel>
                    <Select
                        labelId="search-type"
                        id="search-type"
                        value={searchType}
                        label="Type"
                        onChange={handleChange}
                    >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"movie"}>Movie</MenuItem>
                    <MenuItem value={"game"}>Game</MenuItem>
                    <MenuItem value={"series"}>Series</MenuItem>
                    </Select>
                </FormControl>
                <div style={{paddingLeft: 16}}>
                    <TextField
                        id="year"
                        label="Year"
                        type="year"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                    />
                </div>
            </div>
            {movies ?
                <>
                    {movies.map(item => <Media media={item} />)}
                </> : 
                    <p>No results found</p>
            }
       </>
    )
}