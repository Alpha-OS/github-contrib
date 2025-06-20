# 1. Install your published npm package
npm install github-contrib-chart

# 2. Import and use it in your React project
import GitHubContributions from 'github-contrib-chart';

function App() {
  return (
    <div>
      <GitHubContributions username="your-github-username" showorg={true} />
    </div>
  );
}

export default App;

