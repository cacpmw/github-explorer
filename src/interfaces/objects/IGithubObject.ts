export default interface GithubObject {
    full_name: string;
    description: string;
    html_url: string;
    forks: number;
    stargazers_count: number;
    open_issues: number;
    owner: { login: string; avatar_url: string };
}
