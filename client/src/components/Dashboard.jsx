import { useState } from "react";
import { FaRegChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
import { AiFillBoxPlot } from "react-icons/ai";
import AddItem from "./AddItem";
import ShowGraphs from "./ShowGraphs";

function Dashboard() {
    
    //Graph Options
    const graphOptions = [
        { name: "Bar Chart", icon: FaRegChartBar },
        { name: "Pie Chart", icon: FaChartPie },
        { name: "Line Graph", icon: FaChartLine },
        { name: "Boxplot", icon: AiFillBoxPlot },
    ];

    return (
        <div className="w-15/16 h-15/16 bg-gray-900 mx-auto rounded-4xl flex flex-col justify-center">
            {/* This feature will be added once you get the background Notion API working
                <AddItem graphs={graphOptions}/> 
            */}

            <ShowGraphs />
        </div>
    );
}

export default Dashboard