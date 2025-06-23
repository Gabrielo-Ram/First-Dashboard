import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-[rgba(0,0,0,0.5)] p-2 rounded-3xl text-center">
        <h3 className="font-bold text-base">{`${label}`}</h3>
        {payload.map((datapoint, index) => (
            <p key={index}>{datapoint.dataKey}: {datapoint.value}</p>
        ))}
      </div>
    );
  }

  return null;
};

function LineChartComponent({ data }) {
    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500 flex flex-col justify-center text-3xl h-full">Loading chart data....</div>;
      }
    
      return (
        <div className="flex flex-col h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Name" />
              <YAxis label={{value: 'Weight Lifted', angle: -90, position: 'outsideLeft'}} domain={['auto', 'auto']}/>
              <Tooltip content={<CustomTooltip />}/>
              <Legend />
    
              <Line dataKey="Week 1" type="monotone" stroke="#1c398e" />
              <Line dataKey="Week 2" type="monotone" stroke="#193cb8" />
              <Line dataKey="Week 3" type="monotone" stroke="#1447e6" />
              <Line dataKey="Week 4" type="monotone" stroke="#155dfc" />
              <Line dataKey="Week 5" type="monotone" stroke="#637aff" />
              <Line dataKey="Week 6" type="monotone" stroke="#7a8eff" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
}

export default LineChartComponent;