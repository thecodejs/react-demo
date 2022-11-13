import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { getGridData } from "../../services/get-grid-data";
import { colDefs, defaultColDefs } from "../../constants/col-defs";


export function Grid() {
    const [data, setData] = useState([])

    useEffect(() => {
        getGridData().then(data => setData(data))
    }, [])

  return (
    <div className="ag-theme-alpine w-full h-[600px]">
      <AgGridReact rowData={data} columnDefs={colDefs} defaultColDef={defaultColDefs} />
    </div>
  );
}
