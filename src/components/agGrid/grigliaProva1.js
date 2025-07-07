import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import '../agGrid/grigliaStile.css'

// registra il modulo
ModuleRegistry.registerModules([AllCommunityModule]);

export default function GrigliaProva1() {
  const [columnDefs] = useState([
    { headerName: 'Nome', field: 'nome', sortable: true, filter: true, resizable: true },
    { headerName: 'Cognome', field: 'cognome', sortable: true, filter: true, resizable: true },
  ]);
  const [rowData] = useState([
    { nome: 'Michela', cognome: 'Caucia' },
    { nome: 'Alessandro', cognome: 'Pica' },
    { nome: 'Giacomo', cognome: 'De Giovanni'}
  ]);

  return (
    <div className="ag-theme-quartz griglia-container" style={{ height: 150, width: 600 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        modules={[AllCommunityModule]}
        defaultColDef={{ flex: 1, minWidth: 150, resizable: true }}
        animateRows={true}
      />
    </div>
  );
}
