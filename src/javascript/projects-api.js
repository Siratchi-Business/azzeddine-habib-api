import fetch from 'node-fetch';

export async function getProjects(req, res) {
    try {
        const response = await fetch('https://api.github.com/users/siratchi-business/repos');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Error fetching projects' });
    }
}
