import React from 'react';
import MyBarChart from '../../charts/MyBarChart/MyBarChart';
import MyPieChart from '../../charts/MyPieChart/MyPieChart';
import MyDotLineChart from '../../charts/MyDotLineChart/MyDotLineChart';

const Chart = () => {
    return (
        <div>
            <h2 className='text-center mt-2'>Different Charts from Rechart</h2>
            <div className='d-flex justify-content-around align-items-center mt-5'>
                <div>
                    <MyDotLineChart></MyDotLineChart>
                    <h4 className='text-center'>Dot Line Chart</h4>
                </div>
                <div>
                    <MyPieChart></MyPieChart>
                    <h4 className='text-center'>Pie Chart</h4>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div>
                    <MyBarChart></MyBarChart>
                    <h4 className='text-center'>Bar Chart</h4>
                </div>
            </div>
        </div>
    );
};

export default Chart;