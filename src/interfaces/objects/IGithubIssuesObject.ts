export default interface GithubIssuesObject {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}
