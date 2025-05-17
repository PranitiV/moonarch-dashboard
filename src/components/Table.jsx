import React from 'react'; 
import {CompactTable} from '@table-library/react-table-library/compact';
import { ClipLoader } from "react-spinners";
import '../styles/Styles.css'; 

const Table = ({data}) => {

    const COLUMNS = [
        { label: 'Date', renderCell: (item) => item.date },
        { label: 'EBITDA', renderCell: (item) => item.EBITDA },
        { label: 'net_income', renderCell: (item) => item.net_income },
        { label: 'net_profit_margin', renderCell: (item) => item.net_profit_margin },
        { label: 'operating_expense', renderCell: (item) => item.operating_expense },
        { label: 'revenue', renderCell: (item) => item.revenue },
    ];

    const tableData = {
        nodes: data
    }; 

    if (!data) {
        return (
            <ClipLoader
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }
    
  return (
    <div>
        {data && <>
            <h3 className="chart-title">Tabular Data</h3>
            <CompactTable columns={COLUMNS} data={tableData} />
        </>}
    </div>
  )
}

export default Table
