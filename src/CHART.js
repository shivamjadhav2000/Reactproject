import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'

function CHART(){

    const [chartData,setChartData]= useState({})
    const chart=()=>{
        setChartData({
            labels:["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00"],
            datasets:[
                {
                    label:"number of cases",
                    data:[120,244,200,189,19,299,342,241,221,278],
                    backgroundColor:['rgba(75,192,192,0.6)'],
                    borderWidth:4
                }
            ]
        })
    }
    useEffect(() => {
        chart()
    }, [])
    return (
        <div style={{height:"200px",width:"60%",margin:"2%"}}>
             <Line data={chartData} options={{
                 responsive:true,
                 title:{text:"covid cases",display:true},
                 scales:{
                     yAxes:[{
                            scaleLabel: {
                            display: true,
                            labelString: 'cases'},
                            gridLines:{display:false}
                            }],
                     xAxes:[{
                            scaleLabel: {
                            display: true,
                            labelString: 'hour time'},
                            gridLines:{display:false}}]
                 }
                 
                 }}/>
        </div>
    )
}
export default CHART