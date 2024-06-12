
import cases from "../case-dimensions.json";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CaseSpecs() {
  const [selectedCaseId, setSelectedCaseId] = useState('');

  const handleChange = (event) => {
    setSelectedCaseId(event.target.value);
    console.log(event.target.value);
  };

  const selectedCase = cases.find(case1 => case1.id === selectedCaseId);


  const handleAreaCalculation = (w, h, d) => {
    let a = w * h * d;
    console.log(a);
    return (
      <p>{a}</p>
    );
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="case-select-label">Case</InputLabel>
        <Select
          labelId="case-select-label"
          id="case-select"
          value={selectedCaseId}
          label="Case"
          onChange={handleChange}
        >
          {cases.map((case1) => (
            <MenuItem key={case1.id} value={case1.id}>
              {case1.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedCase && (
        <div>
          <h2>{selectedCase.id}</h2>
          <ul>
            <li>Width: {selectedCase.width}</li>
            <li>Height: {selectedCase.height}</li>
            <li>Depth: {selectedCase.depth}</li>
            <li>Diameter: {selectedCase.diameter}</li>
          </ul>
        </div>
        {handleAreaCalculation(selectedCase.width, selectedCase.height, selectedCase.depth)}
      )}
    </Box>

  );
}

export default CaseSpecs;
