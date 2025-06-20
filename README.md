# GitHub Contrib Chart

A lightweight React component to display a user's GitHub contributions graph, similar to the GitHub profile page. This component fetches and displays the contribution SVG directly from GitHub.

## Features

- ✅ Simple to use React component
- ✅ Fetches real-time contribution data
- ✅ Optional support to hide organization section
- ✅ No external dependencies except `react`

---

## Installation

Install via npm:

```bash
npm install github-contrib-chart

```
## Usage
```bash
import React from 'react';
import GitHubContributions from 'github-contrib-chart';

function App() {
  return (
    <div>
      <h2>GitHub Contributions</h2>
      <GitHubContributions username="your-github-username" showorg={true} />
    </div>
  );
}

export default App;
