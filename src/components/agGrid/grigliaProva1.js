import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';

export default function GrigliaProva1() {

    //colonne 
    const [columnDefs] = useState([
    { headerName: "Nome", field: "nome", sortable: true, filter: true, resizable: true },
    { headerName: "Cognome", field: "cognome", sortable: true, filter: true, resizable: true },
    ]);

    const [rowData] = useState([
    { nome: "Michela", cognome: "Caucia" },
    { nome: "Alessandro", cognome: "Pica" },
    { nome: "Giacomo", cognome: "De Giovanni" }
    ]);

    return (
        <div className="ag-theme-quartz griglia-container">
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{ flex: 1, minWidth: 150, resizable: true }}
            animateRows={true}
        />
        </div>
    )
}
