import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import {
  AddCircleOutline as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";

// Custom Styles
const StyledBox = styled(Box)({
  margin: "20px",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
  padding: "20px",
});

const StyledTabs = styled(Tabs)({
  "& .MuiTab-root": {
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "none",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#1976D2",
  },
});

const StyledTable = styled(Table)({
  "& .MuiTableHead-root": {
    backgroundColor: "#F5F5F5",
  },
  "& .MuiTableCell-root": {
    fontSize: "14px",
    fontWeight: "500",
    borderBottom: "1px solid #E0E0E0",
  },
});

// const AddButton = styled(Button)({
//   backgroundColor: "#1976D2",
//   color: "#FFF",
//   fontWeight: "600",
//   margin: "10px 0",
//   "&:hover": {
//     backgroundColor: "#125CA6",
//   },
// });

const IconButtonStyled = styled(IconButton)({
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

const TabContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
});

const AllowanceAndDeductions = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    data: "",
    amount: "",
  });

  const [allowances, setAllowances] = useState([
    { title: "Bonus Points", isTaxable: "Yes", isConditionBased: "No", isFixed: "Yes" },
    { title: "#1530", isTaxable: "Yes", isConditionBased: "No", isFixed: "Yes" },
    { title: "OT", isTaxable: "Yes", isConditionBased: "No", isFixed: "Yes" },
  ]);

  const [deductions, setDeductions] = useState([
    { title: "Tax Deduction", isRetax: "Yes", isConditionBased: "No", condition: "None", isFixed: "Yes", amount: "500" },
  ]);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({ title: "", data: "", amount: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRow = () => {
    const newRow = { ...formData, isTaxable: "Yes", isConditionBased: "No", isFixed: "Yes" };
    if (currentTab === 0) {
      setAllowances([...allowances, newRow]);
    } else {
      const deductionRow = { ...formData, isRetax: "Yes", condition: "None", isFixed: "Yes" };
      setDeductions([...deductions, deductionRow]);
    }
    handleCloseDialog();
  };

  const handleDeleteRow = (index) => {
    if (currentTab === 0) {
      setAllowances(allowances.filter((_, i) => i !== index));
    } else {
      setDeductions(deductions.filter((_, i) => i !== index));
    }
  };

  return (
    <StyledBox>
      {/* Tabs */}
      <TabContainer>
        <StyledTabs value={currentTab} onChange={handleTabChange}>
          <Tab label="Allowances" />
          <Tab label="Deductions" />
        </StyledTabs>
        <IconButton onClick={handleOpenDialog} color="primary">
          <AddIcon fontSize="large" />
        </IconButton>
      </TabContainer>

      {/* Table */}
      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>{currentTab === 0 ? "Allowance" : "Deduction"}</TableCell>
              <TableCell>{currentTab === 0 ? "Is Taxable" : "Is Retax"}</TableCell>
              <TableCell>Is Condition Based</TableCell>
              {currentTab === 1 && <TableCell>Condition</TableCell>}
              <TableCell>Is Fixed</TableCell>
              {currentTab === 1 && <TableCell>Amount</TableCell>}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(currentTab === 0 ? allowances : deductions).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.isTaxable || row.isRetax}</TableCell>
                <TableCell>{row.isConditionBased}</TableCell>
                {currentTab === 1 && <TableCell>{row.condition}</TableCell>}
                <TableCell>{row.isFixed}</TableCell>
                {currentTab === 1 && <TableCell>{row.amount}</TableCell>}
                <TableCell>
                  <IconButtonStyled onClick={() => handleDeleteRow(index)}>
                    <DeleteIcon color="error" />
                  </IconButtonStyled>
                  <IconButtonStyled>
                    <EditIcon color="primary" />
                  </IconButtonStyled>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{`Add ${currentTab === 0 ? "Allowance" : "Deduction"}`}</DialogTitle>
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
          <TextField
            margin="dense"
            label="Data"
            name="data"
            fullWidth
            variant="outlined"
            value={formData.data}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Amount"
            name="amount"
            fullWidth
            variant="outlined"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddRow} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </StyledBox>
  );
};

export default AllowanceAndDeductions;
