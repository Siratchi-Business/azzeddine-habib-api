require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
app.use(cors());

const corsOptions = {
    origin: 'https://siratchi-business.github.io',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));

app.get('/projects', async (req, res) => {
    try {
        const response = await fetch('https://api.github.com/users/siratchi-business/repos');
        const data = await response.json();

        const projects = data.map(project => ({
            name: project.name,
            description: project.description || 'No description available',
            html_url: project.html_url
        }));

        res.json({ message: 'GET /projects', projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
