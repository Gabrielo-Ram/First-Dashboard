import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

function BarChartComponent({ data }) {
  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500 flex flex-col justify-center text-3xl h-full">Loading chart data....</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis label={{value: 'Weight Lifted', angle: -90, position: 'outsideLeft'}} domain={['auto', 'auto']}/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />

          <Bar dataKey="Week 1" stackId="a" fill="#1c398e" />
          <Bar dataKey="Week 2" stackId="a" fill="#193cb8" />
          <Bar dataKey="Week 3" stackId="a" fill="#1447e6" />
          <Bar dataKey="Week 4" stackId="a" fill="#155dfc" />
          <Bar dataKey="Week 5" stackId="a" fill="#637aff" />
          <Bar dataKey="Week 6" stackId="a" fill="#7a8eff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;