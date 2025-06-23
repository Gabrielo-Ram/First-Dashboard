import { useEffect, useState } from 'react';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';
import SelectableBarChartComponent from './SelectableBarChartComponent';

function ShowGraphs() {
    const [notionData, setNotionData] = useState([]);

    useEffect(() => {
        //Fetches raw Notion Data from API
        fetch('http://localhost:8080/api/notion-data')
            .then((res) => res.json())
            .then((data) => {
                //Cleans data into a format Recharts graphs can read
                const parsedData = data.map((item) => ({
                    "Name": item.properties.Name?.title?.[0]?.plain_text || "Unnamed",
                    "Week 1": item.properties["Week 1"]?.number || 0,
                    "Week 2": item.properties["Week 2"]?.number || 0,
                    "Week 3": item.properties["Week 3"]?.number || 0,
                    "Week 4": item.properties["Week 4"]?.number || 0,
                    "Week 5": item.properties["Week 5"]?.number || 0,
                    "Week 6": item.properties["Week 6"]?.number || 0,
                }));

                setNotionData(parsedData);
            })
            .catch((error) => console.error('Error fetching Notion Data: ', error));
        

    }, []);

    return (
        <div className='w-14/16 h-15/16 mx-auto grid grid-rows-2 grid-cols-2'>
            <div className='graph-container'>
                <BarChartComponent data={notionData} />
            </div>
            <div className='graph-container'>
                <LineChartComponent data={notionData} />
            </div>
            <div className='graph-container col-span-2'>
                <SelectableBarChartComponent data={notionData}/>
            </div>
        </div>
    );
}

export default ShowGraphs;