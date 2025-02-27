import express from 'express';
import cors from 'cors';
import { getProjects } from './javascript/projects-api.js';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.get('/api/projects', getProjects);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
