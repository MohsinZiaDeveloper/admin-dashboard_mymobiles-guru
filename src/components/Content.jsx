import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { ImageAsset } from ".";
import { useSelector, useDispatch } from "react-redux";
import { deleteMobile } from "../store/mobilesActions";

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

  const handleOnCellClick = (params) => {
    navigate("/dashboard/mobileDetail/" + params.id);
    // console.log("on click id ", params);
  };

  const handleDeleteRecords = () => {
    console.log("selectedIds", selectedIds);
    dispatch(deleteMobile(selectedIds));
  };

  const createnew = () => {
    navigate("/dashboard/mobileDetail/createNew");
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
              onClick={handleDeleteRecords}
            >
              {selectedIds.length > 0 && (
                <ImageAsset className=" w-[1.5rem] h-[1.5rem] " src="Delete" />
              )}
            </Button>
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
