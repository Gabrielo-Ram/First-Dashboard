require('dotenv').config();
const { Client } = require('@notionhq/client');
const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();

//Notion setup
const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_PAGE_ID;

//Port
const port = process.env.PORT || 8080;

// Configures a cors connection between this server and frontend server
// at Vite port 5173
const corsOptions = {
    origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

//Creates a server route to '/api'. This is dummy data I used when I was initially configuring this backend server
app.get('/api', (req, res) => {
    res.json({
        fruits: ["apple", "carrot", "banana", "pineapple"]
    });
});

//Setting up a server for the Notion data
app.get('/api/notion-data', async (req, res) => {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
        });

        const results = response.results.map((page) => {
            return {
                id: page.id,
                properties: page.properties,
            };
        });

        res.json(results);

    } catch (error) {
        console.log('Error fetching Notion data:', error);
        res.status(500).json({ error: `Failed to fetch Notion data with status code: NOTION_KEY: ${process.env.NOTION_KEY}    NOTION_PAGE_ID: ${process.env.NOTION_PAGE_ID}` });
    }
});

// Starts the server at the port designated in .env or 8080.
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});