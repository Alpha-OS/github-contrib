import GitHubContributions from "../components/GithubContrib";
export default function Home() {
  return (
    <div>
     <GitHubContributions username="vagabond-0" showorg={true} />
    </div>
  );
}
