import React, { useEffect, useState } from 'react';
import BarChart from '../charts/BarChart';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]
var i = 0;

function Graph() {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }


    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <BarChart width={600} height={400} data={data} />
        </div>
    );
}
export default Graph; 

/*
import React, {useEffect, useState} from 'react';
import * as d3 from "d3";
import { drawChart, drawChart2 } from '../charts/basicD3';

function Graph(props){
    
    console.log('movies desde graph', props)
    const dataset = [
        {id: 1, views: 1256000},
        {id: 2, views: 7256000},
        {id: 3, views: 856000},
        {id: 4, views: 2300000},
        {id: 5, views: 4256000},
        {id: 6, views: 9256000}
    ];
    var i = 0;

    const [data, setData] = useState([]);

    useEffect(() => {
        changeChart();
    }, []);

    const changeChart = () => {
        drawChart2(400, 600, dataset[i++]);
        if(i === dataset.length) i = 0;
    }
    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeChart}>Change Data</button>
            <div id="chart">
            </div>
        </div>
    );
}
export default Graph;
*/