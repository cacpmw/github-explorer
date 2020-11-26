export default interface IGithubIssuesObject {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}
