import './Chart.css'
import ChartBar from './ChartBar'

const ShowChart = (props) => {
    const dataPointValues=props.dataPoints.map((datapoint)=>{return datapoint.value})
    const totalMaximum=Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {
                props.dataPoints.map((datapoint) => {
                  return <ChartBar
                        key={datapoint.label}
                        value={datapoint.value}
                        maxValue={totalMaximum}
                        label={datapoint.label}
                    />
                })
            }

        </div>
    )

}
export default ShowChart