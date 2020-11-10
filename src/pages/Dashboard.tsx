import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../services/api';
import { Title, Form, Repositories } from '../styles/pages/dashboard';
import logo from '../images/Logo.svg';

interface GithubObject {
    full_name: string;
    description: string;
    owner: { login: string; avatar_url: string };
}

const Dashboard: React.FC = () => {
    const [newRepository, setNewRepository] = useState('');
    const [repositories, setRepositories] = useState<GithubObject[]>([]);

    function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        api.get<GithubObject>(`repos/${newRepository}`).then(response => {
            const repository = response.data;
            setRepositories([...repositories, repository]);
        });
        setNewRepository('');
    }

    function setInput(event: ChangeEvent<HTMLInputElement>): void {
        if (event.target.value) {
            setNewRepository(event.target.value);
        }
    }

    return (
        <>
            <img src={logo} alt="icon" />
            <Title>Explore Github Repositories</Title>
            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepository}
                    onChange={setInput}
                    placeholder="Type here..."
                />
                <button type="submit">Search</button>
            </Form>
            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={25} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
