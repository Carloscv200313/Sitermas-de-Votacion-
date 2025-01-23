import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
const chartSetting = {
    xAxis: [
        {
            label: 'Numero de votos',
        },
    ],
    width:500,
    height: 400,
};

export default function HorizontalBars() {
    const { socket } = useContext(SocketContext);
    const [dataset, setBandas] = useState([]);
    const valueFormatter=(value) =>{
        return `${value}votos`;
    }
    useEffect(() => {
        socket.on("evento", (bandas) => {
            console.log(bandas)
            setBandas(bandas);
        });
        //return () => socket.off("evento");
    }, [socket]);
    return (
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
            series={[{ dataKey: 'votos', label: 'Catidad de Votos', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
        />
    );
}