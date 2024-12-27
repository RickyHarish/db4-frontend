import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
  Avatar,
} from '@mui/material';

const initialData = [
  {
    id: 1,
    asset: 'GPS STORES (Common Laptop) (purchase)',
    status: 'In use',
    assignedDate: 'Nov 12, 2024',
    avatar: 'G',
    color: '#FF5252',
  },
  {
    id: 2,
    asset: 'Travelpro',
    status: 'In use',
    assignedDate: 'Nov 9, 2024',
    avatar: 'TR',
    color: '#7E57C2',
  },
  {
    id: 3,
    asset: 'Samsung.',
    status: 'In use',
    assignedDate: 'Nov 7, 2024',
    avatar: 'SA',
    color: '#4CAF50',
  },
];

const Assets = () => {
  const [rows, setRows] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    requestingUser: '',
    assetCategory: '',
    description: '',
  });

  // Open/Close Dialog
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Save Button
  const handleSave = () => {
    if (formData.requestingUser && formData.assetCategory) {
      const newAsset = {
        id: rows.length + 1,
        asset: `${formData.assetCategory} (${formData.description})`,
        status: 'In use',
        assignedDate: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        avatar: formData.assetCategory
          .split(' ')
          .map((word) => word[0])
          .join(''),
        color: '#' + Math.floor(Math.random() * 16777215).toString(16), // Random color
      };

      setRows([...rows, newAsset]);
      setFormData({ requestingUser: '', assetCategory: '', description: '' });
      handleClose();
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: '20px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Asset Management
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: '#FF5252',
            '&:hover': { backgroundColor: '#FF1744' },
          }}
        >
          + Create
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar sx={{ bgcolor: row.color }}>{row.avatar}</Avatar>
                    {row.asset}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <span style={{ color: '#FFB300', fontSize: '18px' }}>•</span> {row.status}
                  </Box>
                </TableCell>
                <TableCell>{row.assignedDate}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" sx={{ backgroundColor: '#FF5252' }}>
                    Return Request
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Create Asset Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Asset</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Requesting User"
            name="requestingUser"
            fullWidth
            variant="outlined"
            value={formData.requestingUser}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Asset Category"
            name="assetCategory"
            fullWidth
            variant="outlined"
            value={formData.assetCategory}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            fullWidth
            variant="outlined"
            value={formData.description}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Assets;
