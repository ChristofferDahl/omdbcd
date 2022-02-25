import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Search from './Search';
import Favorites from './Favorites';
import './App.css'

export default function App() {
  return(
    <div className="App">
      <Typography variant="h1">OMDBCD</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="favorites-header">
          <Typography variant="h4">Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Search />
        </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="favorites-header">
            <Typography variant="h4">Favorites</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Favorites />
          </AccordionDetails>
      </Accordion>
    </div>
  );
}

