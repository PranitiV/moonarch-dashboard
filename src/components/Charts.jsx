import React, {useState, useEffect} from 'react'; 
import ChartCard from './ChartCard';
import Table from '../components/Table'; 
import '../styles/Styles.css'; 
import { CSVLink } from "react-csv";

const Charts = () => {
    const [incomeData, setIncomeData] = useState(null); 
    const [charts, setCharts] = useState(['line', 'bar', 'area', 'composed'])

    const fetchData = async() => {
        const url = 'https://real-time-finance-data.p.rapidapi.com/company-income-statement?symbol=AAPL%3ANASDAQ&period=QUARTERLY&language=en';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '44f18d5c0bmsh7d7e8de750dd60dp18ec77jsn94e7eb26d63c',
                'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setIncomeData(result.data.income_statement)
            console.log(result.data.income_statement);
        } catch (error) {
            console.error(error);
        }
    }

    const addNewChart = (event) => {
        const newType = event.target.value; 
        setCharts([...charts, newType]); 
    }

    useEffect(() =>  {
        fetchData(); 
    }, [])
        
  return (
    <div className="charts-container">
      <div className="chart-grid">
        {charts.map((chartType, index) => (
          <ChartCard type={chartType} data={incomeData} key={index} />
        ))}
      </div>

      <div className="table-wrapper">
        <Table data={incomeData} />
      </div>

      <div className="chart-controls">
        <label htmlFor="newChart" className="dropdown-label">
          Add a new chart
        </label>
        <select id="newChart" onChange={addNewChart} className="dropdown-select">
          <option value="" disabled selected>
            Select chart
          </option>
          <option value="line">Net Income</option>
          <option value="bar">Revenue & Operating Expenses</option>
          <option value="area">Net Profit Margin</option>
          <option value="composed">All Statistics</option>
        </select>

        {incomeData && (
          <CSVLink data={incomeData} className="csv-link">
            Download Income Statements
          </CSVLink>
        )}
      </div>
    </div>
  )
}

export default Charts
