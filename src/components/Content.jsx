import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { ImageAsset } from ".";
import { useSelector, useDispatch } from "react-redux";
import { deleteMobile } from "../store/mobilesActions";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  { field: "BrandName", headerName: "BrandName", width: 130 },
  { field: "RAM_ROM", headerName: "RAM_ROM", width: 130 },
  {
    field: "Condition",
    headerName: "Condition",
    type: "number",
    width: 120,
  },
  {
    field: "Price",
    headerName: "Price",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 90,
  },
  { field: "Location", headerName: "Location", width: 130 },
  { field: "ContactNo", headerName: "ContactNo", width: 130 },
  // {
  //   renderCell: (cellValues) => {
  //     return (
  //       <Button variant="contained" color="primary">
  //         Go
  //       </Button>
  //     );
  //   },
  // },
];

const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mobileList } = useSelector((state) => state.mobiles);
  const [selectedIds, setSelectedIds] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOnCellClick = (params) => {
    navigate("/dashboard/mobileDetail/" + params.id);
  };

  const createnew = () => {
    navigate("/dashboard/mobileDetail/createNew");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ConformDelete = () => {
    console.log("selectedIds", selectedIds);
    dispatch(deleteMobile(selectedIds));
    setOpen(false);
  };

  return (
    <>
      <div className="w-full h-96">
        <div
          className={`flex mb-5 rounded  +  ${
            selectedIds.length > 0 ? "bg-pink" : ""
          }`}
        >
          <div className="w-1/2 align-middle pt-3 text-sm font-lighter text-[#f50057] pb-3 pl-2">
            {selectedIds.length > 0 && (
              <h3>Selected Items : {selectedIds.length}</h3>
            )}
          </div>
          <div className="w-1/2 pr-2 flex justify-end">
            <Button
              disabled={!selectedIds.length > 0}
              // onClick={handleDeleteRecords}
              onClick={handleClickOpen}
            >
              {selectedIds.length > 0 && (
                <ImageAsset className=" w-[1.5rem] h-[1.5rem] " src="Delete" />
              )}
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                <div className="flex flex-col">
                  <div className="flex justify-center">
                    <ImageAsset
                      className="justify-center text-center w-[1.5rem] h-[1.5rem]"
                      src="Delete"
                    />
                  </div>
                  <div className="flex justify-center">
                    <h1>Are you sure ?</h1>
                  </div>
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <p className="px-10">
                    Do you want to delete this data ? <br />
                    this data canot be restore.
                  </p>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={ConformDelete} autoFocus>
                  ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className="w-full flex pb-3 justify-end">
          <button
            className="btn text-white text-xs font-light rounded-sm p-2 pl-3 pr-3 bg-orange-400 btn-dark mt-3"
            type="submit"
            onClick={createnew}
          >
            Create new +
          </button>
        </div>

        <DataGrid
          onSelectionModelChange={(newSelectionModel) => {
            console.log("Selected checkbox ", newSelectionModel);
            setSelectedIds(newSelectionModel);
          }}
          rows={mobileList}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onRowDoubleClick={handleOnCellClick}
        />
      </div>
    </>
  );
};

export default Content;
