'use client';

import { useEffect, useState } from 'react';

const GitHubContributions = ({username, showorg = false}) => {
  const [svg, setSvg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/github-contributions?username=${username}`);
        const text = await res.text();
        setSvg(text);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username, showorg]);

  if (loading) {
    return (
      <div className="cyberpunk-loading">
        <div className="glitch-text">Loading...</div>
        <div className="loading-bar"></div>
      </div>
    );
  }

  return (
    <div className="cyberpunk-container p-10">
      <div className="cyberpunk-title">GitHub Activity</div>
      <div className="cyberpunk-graph" dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};

export default GitHubContributions;
