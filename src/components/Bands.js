import React from 'react';
import Band from './Band.js';

function Bands({bands, deleteBand}) {
    return (
        <div>
              {bands.map(b => <Band deleteBand = {deleteBand} key = {b.id} band = {b} />)}
        </div>
    );
}

export default Bands;
