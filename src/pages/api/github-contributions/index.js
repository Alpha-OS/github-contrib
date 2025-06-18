export default async function handler(req, res) {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const response = await fetch(`https://github.com/users/${username}/contributions`);
    const svg = await response.text();

    res.setHeader('Content-Type', 'text/json');
    res.status(200).send(svg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch contributions' });
  }
}

