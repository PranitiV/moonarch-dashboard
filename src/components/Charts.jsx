import React, {useState, useEffect} from 'react'; 
import ChartCard from './ChartCard';
import Table from '../components/Table'; 
import '../styles/Styles.css'; 
import { CSVLink } from "react-csv";
import ReactSearchBox from "react-search-box";
import { ClipLoader } from "react-spinners";

const Charts = () => {
    const [incomeData, setIncomeData] = useState(null); 
    const [charts, setCharts] = useState(['line', 'bar', 'area', 'composed']); 
    const [tickers, setTickers] = useState([]); 
    const [company, setCompany] = useState({key: "AAPL", value: "Apple"}); 
    const [loading, setLoading] = useState(true); 


    const fetchData = async(company) => {
        setLoading(true); 
        const symbol = company.key; 
        console.log(symbol)
        const url = `https://real-time-finance-data.p.rapidapi.com/company-income-statement?symbol=${symbol}&period=QUARTERLY&language=en`;
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
        } finally {
            setLoading(false)
        }
    }

    const fetchTickerData = async() => {
        const url = 'https://yahoo-finance15.p.rapidapi.com/api/v2/markets/tickers?page=1&type=STOCKS';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '44f18d5c0bmsh7d7e8de750dd60dp18ec77jsn94e7eb26d63c',
                'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const parsedData = result.body.map((item,index) => ({
                key: item.symbol, 
                value: item.name
            })); 
            setTickers(parsedData)
            console.log(parsedData);
        } catch (error) {
            console.error(error);
        }
    }

    const addNewChart = (event) => {
        const newType = event.target.value; 
        setCharts([...charts, newType]); 
    }

    const onSelectCompany = (item) => {
        console.log("i have set the new company")
        setCompany(item.item)
        fetchData(company); 
    }

    useEffect(() =>  {
        fetchData(company); 
        setIncomeData(null); 
        fetchTickerData(); 
    }, [])


    useEffect(()=> {
        console.log(company)
    }, [company])
        
  return (
    <div className="charts-container">
        <div className="search-box">
            <ReactSearchBox
                placeholder="Search for a company ..."
                value="Doe"
                data={tickers}
                autoFocus
                leftIcon 
                onSelect = {onSelectCompany}
            />
        </div>
        <h2 className="chart-title-main">{company.value}</h2>
        {loading? (
            
                <ClipLoader
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            
        ): ( <>
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
            </>
        )}
      
    </div>
  )
}

export default Charts