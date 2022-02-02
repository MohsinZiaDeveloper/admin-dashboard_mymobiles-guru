import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { ImageAsset } from ".";

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
    width: 90,
  },
  {
    field: "Price",
    headerName: "Price",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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

const rows = [
  {
    id: 1,
    RAM_ROM: "8GB",
    BrandName: "Samsung",
    age: 35,
    Condition: "Good",
    Price: "25k",
    Location: "Islamabad",
    ContactNo: "+92987654098",
  },
  {
    id: 2,
    RAM_ROM: "16Gb",
    BrandName: "Oppo",
    age: 35,
    Condition: "Moderate",
    Price: "25k",
    Location: "Islamabad",
    ContactNo: "+92987654098",
  },
  {
    id: 3,
    RAM_ROM: "8GB",
    BrandName: "Iphone",
    age: 35,
    Condition: "Excellent",
    Price: "125k",
    Location: "Rawalpindi",
    ContactNo: "+929098765498",
  },
  {
    id: 4,
    RAM_ROM: "4GB",
    BrandName: "infinix",
    age: 35,
    Condition: "Good",
    Price: "5k",
    Location: "Lahore",
    ContactNo: "+929345654098",
  },
  {
    id: 5,
    RAM_ROM: "4/8GB",
    BrandName: "Infinix",
    age: 35,
    Condition: "Moderate",
    Price: "42k",
    Location: "Multan",
    ContactNo: "+9276543098",
  },
  {
    id: 6,
    RAM_ROM: "8/16GB",
    BrandName: "Vivo",
    age: 35,
    Condition: "Poor",
    Price: "15k",
    Location: "Rawalpindi",
    ContactNo: "+92098765438",
  },
];

const Content = () => {
  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState([]);

  const handleOnCellClick = (params) => {
    navigate("/dashboard/mobileDetail/" + params.id);
    // console.log("on click id ", params);
  };

  const handleDeleteRecords = () => {
    console.log("selectedIds", selectedIds);
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
        <DataGrid
          onSelectionModelChange={(newSelectionModel) => {
            console.log("Selected checkbox ", newSelectionModel);
            setSelectedIds(newSelectionModel);
          }}
          rows={rows}
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
