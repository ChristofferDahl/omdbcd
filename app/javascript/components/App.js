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

const styles = {
    section: {
      fontFamily: "-apple-system",
      fontSize: "1rem",
      fontWeight: 1.5,
      lineHeight: 1.5,
      color: "#423e3c",
      padding: "0 2em"
    },
};

export default function App() {
    return(
        <div style={styles.section}>
            <Typography variant="h1">OMDBCD</Typography>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="favorites-header"
                >
                    <Typography variant="h4">Search</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Search />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="favorites-header"
                >
                    <Typography variant="h4">Favorites</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Favorites />
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

