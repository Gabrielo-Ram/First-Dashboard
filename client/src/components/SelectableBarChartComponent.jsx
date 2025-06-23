import { useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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

function SelectableBarChartComponent({ data }) {
  const [selectedAthlete, setSelectedAthlete] = useState('');
  const [specificData, setSpecificData] = useState([]);

  const handleSelect = (e) => {
    //Load data specific to the selected athlete
    data.forEach((athlete) => {
      if (athlete.Name == e.target.value) {
        const newData = [{
            "Week": "Week 1",
            "data": athlete["Week 1"]
          },
          {
            "Week": "Week 2",
            "data": athlete["Week 2"]
          },
          {
            "Week": "Week 3",
            "data": athlete["Week 3"]
          },
          {
            "Week": "Week 4",
            "data": athlete["Week 4"]
          },
          {
            "Week": "Week 5",
            "data": athlete["Week 5"]
          },
          {
            "Week": "Week 6",
            "data": athlete["Week 6"]
          },
        ];
        setSpecificData(newData);
      }
    });

    setSelectedAthlete(e.target.value);
  }  

  return (
    <>
      {specificData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={specificData}
            margin={{ top: 20, right: 20, left: -10, bottom: 0 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="Week" scale="band" />
            <YAxis label={{value: 'Weight Lifted', angle: -90, position: 'outsideLeft'}} domain={['auto', 'auto']}/>
            <Tooltip content={<CustomTooltip />}/>
            <Legend />
            
            <Bar dataKey="data" barSize={20} fill="#1447e6" />
            <Line type="monotone" dataKey="data" stroke="#7a8eff" />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <div className='justify-self-center my-[9%] font-bold text-2xl text-gray-500 shadow-3xl'>Please select an athlete to view their data</div>
      )}
      <label className='ml-[70%] bg-blue-900 p-2 mb-[5%] rounded-2xl hover:cursor-pointer'>
        <select name='selectGraph' id='selectGraph' onChange={handleSelect} className='hover:cursor-pointer'>
          <option>--Select a User--</option>
          {data.map((athlete, index) => (
            <option key={index} value={athlete.Name}>{athlete.Name}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default SelectableBarChartComponent;