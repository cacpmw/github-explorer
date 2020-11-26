import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../services/api';
import logo from '../images/Logo.svg';
import { Header, RepositoryInfo, Issues } from '../styles/pages/repository';

interface GithubObject {
    full_name: string;
    description: string;
    html_url: string;
    forks: number;
    stargazers_count: number;
    open_issues: number;
    owner: { login: string; avatar_url: string };
}
interface GithubIssuesObject {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}
const Repository: React.FC = () => {
    const [repository, setRepository] = useState<GithubObject | null>(null);
    const [issues, setIssues] = useState<GithubIssuesObject[]>([]);
    const { params } = useRouteMatch<{ repository: string }>();
    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => {
            setRepository(response.data);
        });
        api.get(`repos/${params.repository}/issues`).then(response => {
            setIssues(response.data);
        });
    }, [params.repository]);

    return (
        <>
            <Header>
                <img src={logo} alt="icon" />
                <Link to="/">
                    <FiChevronLeft size={20} />
                    Voltar
                </Link>
            </Header>
            {repository && (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt="" />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>Description</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues}</strong>
                            <span>Open Issues</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
                {issues.map(issue => (
                    <a
                        key={issue.id}
                        target="_blank"
                        rel="noreferrer"
                        href={issue.html_url}
                    >
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={25} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;
