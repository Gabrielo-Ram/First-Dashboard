import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

function DataPage() {
    const [loadingData, setLoadingData] = useState(true);
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
            setLoadingData(false);
    }, []);

  return (
    <>
      <Sidebar />
      <div className="w-[94%] h-screen ml-[8%] flex flex-col justify-center items-center">
        <div className="w-[94%] h-[94%] bg-gray-900 rounded-3xl flex flex-col text-white">
            <h1 className='text-3xl text-center font-bold p-20'>This is the raw JSON that was fetched from Notion:</h1>

            {loadingData ? (
                <p className='w-7/8 mx-auto mt-[5%] text-3xl text-center text-gray-500'>Loading...</p>
            ) : (
                <p className='w-7/8 mx-auto mt-[5%] text-xl text-center'>{JSON.stringify(notionData)}</p>)}
        </div>
      </div>
    </>
  );
}

export default DataPage;