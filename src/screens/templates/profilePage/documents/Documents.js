import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Avatar,
  Paper,
  Grid,
} from "@mui/material";
import { CheckCircle, Cancel, Delete, Add, FileUpload } from "@mui/icons-material";

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    document: null,
    expiryDate: "",
    isDigital: false,
  });

  // Open/Close Dialog
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ title: "", document: null, expiryDate: "", isDigital: false });
  };

  // Handle Form Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const handleToggleChange = () => {
    setFormData({ ...formData, isDigital: !formData.isDigital });
  };

  // Handle Save Button
  const handleSave = () => {
    if (formData.title && formData.document && formData.expiryDate) {
      const newDocument = {
        ...formData,
        id: documents.length + 1,
        documentUrl: URL.createObjectURL(formData.document), // Generate file URL
      };
      setDocuments([...documents, newDocument]);
      handleClose();
    }
  };

  // Handle Document Actions
  const handleApprove = (id) => {
    alert(`Document ${id} approved.`);
  };

  const handleReject = (id) => {
    alert(`Document ${id} rejected.`);
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  // Handle Document Open
  const handleOpenDocument = (documentUrl) => {
    window.open(documentUrl, "_blank");
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Documents Management
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleClickOpen}
          sx={{ backgroundColor: "#FF5252", "&:hover": { backgroundColor: "#FF1744" } }}
        >
          + Create
        </Button>
      </Box>

      {/* Documents List */}
      <Paper sx={{ padding: "20px" }}>
        {documents.map((doc) => (
          <Box
            key={doc.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="8px"
            mb={2}
            p={2}
            bgcolor="#F9F9F9"
            boxShadow="0px 1px 3px rgba(0,0,0,0.1)"
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar sx={{ backgroundColor: "#FF5252" }}>
                {doc.isDigital ? <CheckCircle /> : <Add />}
              </Avatar>
              <Typography
                variant="subtitle1"
                sx={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => handleOpenDocument(doc.documentUrl)}
              >
                {doc.title}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleApprove(doc.id)}
                sx={{ minWidth: "40px" }}
              >
                <CheckCircle />
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleReject(doc.id)}
                sx={{ minWidth: "40px" }}
              >
                <Cancel />
              </Button>
              <IconButton onClick={() => handleDelete(doc.id)} sx={{ color: "red" }}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Paper>

      {/* Create Document Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Document</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={formData.title}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, mb: 1 }}
            startIcon={<FileUpload />}
          >
            Upload File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {formData.document && (
            <Typography variant="body2" color="textSecondary">
              {formData.document.name}
            </Typography>
          )}
          <TextField
            margin="dense"
            label="Expiry Date"
            type="date"
            name="expiryDate"
            fullWidth
            variant="outlined"
            value={formData.expiryDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Typography variant="body2" mr={1}>
              Is Digital Asset?
            </Typography>
            <ToggleButtonGroup
              value={formData.isDigital}
              exclusive
              onChange={handleToggleChange}
            >
              <ToggleButton value={true}>Yes</ToggleButton>
              <ToggleButton value={false}>No</ToggleButton>
            </ToggleButtonGroup>
          </Box>
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

export default Documents;
