'use client';

import { useEffect, useState } from 'react';
import "../styles/globals.css";
const GitHubContributions = ({username}) => {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/github-contributions?username=${username}`);
      const text = await res.text();
      console.log(text);
      setSvg(text);
    };
    fetchData();
  }, [username]);


  if(svg === ""){
    return(
      <div>Loading....</div>
    )
  }
  return (
    <div className='p-10'>
      <div dangerouslySetInnerHTML={{ __html: svg }}  />
    </div>
  );
};

export default GitHubContributions;

