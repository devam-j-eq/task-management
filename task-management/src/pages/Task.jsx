import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { randomId, randomArrayItem } from "@mui/x-data-grid-generator";

const priorityLevels = ["High", "Medium", "Low"];
const statuses = ["To Do", "In Progress", "Completed"];

const initialRows = [
  { id: randomId(), taskNo: "T-1", taskName: "Fix Login Issue", name: "Devam", startDate: new Date(), dueDate: new Date(), priority: "High", status: "Completed" },
  { id: randomId(), taskNo: "T-2", taskName: "Add Dark Mode", name: "Meet", startDate: new Date(), dueDate: new Date(), priority: "Medium", status: "To Do" },
  { id: randomId(), taskNo: "T-3", taskName: "Update Dashboard UI", name: "Jeet", startDate: new Date(), dueDate: new Date(), priority: "Low", status: "In Progress" },
  { id: randomId(), taskNo: "T-4", taskName: "Fix API Calls", name: "Neel", startDate: new Date(), dueDate: new Date(), priority: "High", status: "Completed" },
  { id: randomId(), taskNo: "T-5", taskName: "Improve Performance", name: "Jeel", startDate: new Date(), dueDate: new Date(), priority: "Medium", status: "To Do" },
  { id: randomId(), taskNo: "T-6", taskName: "Fix Login Issue", name: "Devam", startDate: new Date(), dueDate: new Date(), priority: "High", status: "Completed" },
  { id: randomId(), taskNo: "T-7", taskName: "Add Dark Mode", name: "Meet", startDate: new Date(), dueDate: new Date(), priority: "Medium", status: "To Do" },
  { id: randomId(), taskNo: "T-8", taskName: "Update Dashboard UI", name: "Jeet", startDate: new Date(), dueDate: new Date(), priority: "Low", status: "In Progress" },
  { id: randomId(), taskNo: "T-9", taskName: "Fix API Calls", name: "Neel", startDate: new Date(), dueDate: new Date(), priority: "High", status: "Completed" },
  { id: randomId(), taskNo: "T-10", taskName: "Improve Performance", name: "Jeel", startDate: new Date(), dueDate: new Date(), priority: "Medium", status: "To Do" },
];

function EditToolbar({ setRows, setRowModesModel }) {
  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        taskNo: `T-${oldRows.length + 1}`,
        taskName: "",
        name: "",
        startDate: new Date(),
        dueDate: new Date(),
        priority: "Medium",
        status: "To Do",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "taskName" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Task
      </Button>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const { status } = useParams(); // Get status from the URL
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});


  const formatStatus = (status) => status.toLowerCase().replace(/\s+/g, "");
const filteredRows = status 
  ? rows.filter(row => formatStatus(row.status) === formatStatus(status)) 
  : rows;

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };


     const columns = [
      { field: "taskNo", headerName: "Task No.", width: 100, editable: false },
      { field: "taskName", headerName: "Task Name", width: 200, editable: true },
      { field: "name", headerName: "Assigned To", width: 180, editable: true },
      { field: "startDate", headerName: "Start Date", width: 150, type: "date", editable: true },
      { field: "dueDate", headerName: "Due Date", width: 150, type: "date", editable: true },
      { field: "priority", headerName: "Priority", width: 150, editable: true, type: "singleSelect", valueOptions: priorityLevels },
    
      { field: "status", headerName: "Status", width: 150,editable: true,type: "singleSelect", 
        valueOptions: statuses, renderCell: (params) => {
              const colorMap = {
                "To Do": "#be185d",
                "In Progress": "#f59e0b",
                "Completed": "#0f766e",
              };
      
              return (
                <span style={{ color: colorMap[params.value], fontWeight: "bold" }}>
                  {params.value}
                </span>
              );}
            },
      ...(status ? [] : [ // Hide "Actions" column when status is filtered
        {
          field: "actions",
          type: "actions",
          headerName: "Actions",
          width: 100,
          getActions: ({ id }) => {
            const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
            return isInEditMode
              ? [
                  <GridActionsCellItem icon={<SaveIcon />} label="Save" sx={{ color: "primary.main" }} onClick={() => setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })} />, 
                  <GridActionsCellItem icon={<CancelIcon />} label="Cancel" onClick={() => setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View, ignoreModifications: true } })} color="inherit" />
                ]
              : [
                  <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={() => setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })} color="inherit" />, 
                  <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => setRows(rows.filter((row) => row.id !== id))} color="inherit" />
                ];
          },
        }
      ])
    ];
    
  return (
    <Box
      sx={{
        height: '100%',
        width: "100%",
        "& .actions": { color: "text.secondary" },
        "& .textPrimary": { color: "text.primary" },
      }}
    >
      <DataGrid
        rows={filteredRows} // Use filtered list
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={setRowModesModel}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{ toolbar: EditToolbar }}
        slotProps={{ toolbar: { setRows, setRowModesModel } }}
      />
    </Box>
  );
}