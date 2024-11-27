import React, { useState } from 'react';
import { Container, TextField, Button, MenuItem, Select, InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// IncomePage component
const IncomePage = () => {
  const [incomeType, setIncomeType] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('');
  const [sourceDescription, setSourceDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [incomeSources, setIncomeSources] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const newIncome = {
      incomeType,
      amount,
      frequency,
      sourceDescription,
      startDate,
    };

    setIncomeSources([...incomeSources, newIncome]);

    // Reset the form
    setIncomeType('');
    setAmount('');
    setFrequency('');
    setSourceDescription('');
    setStartDate('');
  };

  // Handle deletion of an income source
  const handleDelete = (index) => {
    const updatedIncomeSources = incomeSources.filter((_, i) => i !== index);
    setIncomeSources(updatedIncomeSources);
  };

  return (
    <Container>
      <h1>Income Management</h1>
      
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          label="Income Type"
          variant="outlined"
          fullWidth
          margin="normal"
          value={incomeType}
          onChange={(e) => setIncomeType(e.target.value)}
          required
        />
        
        <TextField
          label="Amount (UGX)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            label="Frequency"
          >
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="annually">Annually</MenuItem>
            <MenuItem value="one-time">One-time</MenuItem>
          </Select>
        </FormControl>
        
        <TextField
          label="Source Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={sourceDescription}
          onChange={(e) => setSourceDescription(e.target.value)}
          required
        />

        <TextField
          label="Start Date"
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Income
        </Button>
      </form>

      <h2>Income Sources</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Income Type</TableCell>
              <TableCell>Amount (UGX)</TableCell>
              <TableCell>Frequency</TableCell>
              <TableCell>Source Description</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomeSources.map((income, index) => (
              <TableRow key={index}>
                <TableCell>{income.incomeType}</TableCell>
                <TableCell>{income.amount.toLocaleString()}</TableCell> {/* Format to display UGX properly */}
                <TableCell>{income.frequency}</TableCell>
                <TableCell>{income.sourceDescription}</TableCell>
                <TableCell>{income.startDate}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default IncomePage;
