import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../services/api';
import { Title, Form, Repositories, Error } from '../styles/pages/dashboard';
import logo from '../images/Logo.svg';
import IGithubObject from '../interfaces/objects/IGithubObject';

const Dashboard: React.FC = () => {
    const [newRepository, setNewRepository] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<IGithubObject[]>(
        (): IGithubObject[] => {
            const storedRepositories = localStorage.getItem(
                '@githubExplorer:repositories',
            );
            if (storedRepositories) {
                return JSON.parse(storedRepositories) as IGithubObject[];
            }
            return [] as IGithubObject[];
        },
    );

    // Adding data to localstorage
    // when repositories suffer changes
    useEffect(() => {
        localStorage.setItem(
            '@githubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!newRepository) {
            setInputError('Enter the name of the repository');
            return;
        }
        api.get<IGithubObject>(`repos/${newRepository}`)
            .then(response => {
                const repository = response.data;
                setRepositories([...repositories, repository]);
                setInputError('');
            })
            .catch(() => {
                setInputError('We could not find this repository');
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
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepository}
                    onChange={setInput}
                    placeholder="Type here..."
                />
                <button type="submit">Search</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map(repository => (
                    <Link
                        key={repository.full_name}
                        to={`/repository/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={25} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
