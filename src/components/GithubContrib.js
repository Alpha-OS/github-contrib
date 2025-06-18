'use client';

import { useEffect, useState } from 'react';

const GitHubContributions = ({username}) => {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/github-contributions?username=${username}`);
      const text = await res.text();
      setSvg(text);
    };
    fetchData();
  }, [username]);

  return (
    <div dangerouslySetInnerHTML={{ __html: svg || '<p>Loading...</p>' }} />
  );
};

export default GitHubContributions;

