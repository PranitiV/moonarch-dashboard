import React from 'react'; 
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ComposedChart } from 'recharts';
import { ClipLoader } from "react-spinners";
import '../styles/Styles.css'; 

const ChartCard = ({type ='line', data}) => {
 
    if (!data) {
        return (
            <ClipLoader
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }

    const renderCharts = () => {
        if (type === 'line'){
            return (
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="net_income" stroke="#8884d8" />
                </LineChart>
            )
        } else if (type === "bar") {
            return (
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="operating_expense" fill="#82ca9d" />
                </BarChart>
            )
        } else if (type === 'area') {
            return(
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="net_profit_margin" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            )  
        } else if (type === 'composed') {
            return (
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="EBITDA" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="net_income" stroke="#ff7300" />
                </ComposedChart>
            )
        }
    }
  return (
    <div>
      {renderCharts()}
    </div>
  )
}

export default ChartCard
