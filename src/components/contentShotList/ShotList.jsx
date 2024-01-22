import CameraData from "../../data/CameraData";
import ShotListItem from "./ShotListItem";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

export default function ShotList() {
//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "name", headerName: "Name", width: 130 },
//     { field: "setPiece", headerName: "Set Piece", width: 130 },
//     {
//       field: "image",
//       headerName: "Set Piece",
//       width: 90,
//     },
//     {
//       field: "selection",
//       headerName: "Select",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.shotList.name || ""} ${params.shotList.id || ""}`,
//     },
//   ];

  const cameraList = CameraData?.map((camera) => {
    const shotList = camera.shotList.map((shot, index) => {
      return <ShotListItem key={index} item={shot} />;
    });

    return (
      <div key={camera.name}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {camera.name}
          </AccordionSummary>
          <AccordionDetails>
            {/* <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={shotList}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div> */}
            {shotList}
          </AccordionDetails>
        </Accordion>
      </div>
    );
  });

  return <div className="ShotList">{cameraList}</div>;
}
