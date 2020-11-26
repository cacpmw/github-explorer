import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 81px;
    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    display: flex;
    flex-direction: column;
    header {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        img {
            margin-left: 10px;
            margin-right: 56px;
            height: 120px;
            width: 120px;
            border-radius: 50%;
        }
        div {
            strong {
                font-weight: 700;
                font-style: normal;
                font-size: 36px;
                line-height: 28px;
                color: #3d3d4d;
            }
            p {
                margin-top: 4px;
                font-weight: 400;
                font-style: normal;
                font-size: 18px;
                line-height: 21px;
                color: #737380;
            }
        }
    }
    ul {
        display: flex;
        list-style: none;
        li {
            & + li {
                margin-left: 80px;
            }
            display: flex;
            justify-content: center;
            flex-direction: column;
            strong {
                font-weight: 700;
                font-style: normal;
                font-size: 36px;
                line-height: 28px;
                color: #3d3d4d;
            }
            span {
                font-family: Roboto;
                margin-top: 4px;
                font-weight: 400;
                font-style: normal;
                font-size: 20px;
                line-height: 21px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 120px;
    a {
        text-decoration: none;
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        flex-direction: row;
        display: flex;
        align-items: center;
        transition: all 0.2s;

        & + a {
            margin-top: 16px;
        }
        &:hover {
            transform: scale(1.02);
        }
        div {
            margin-left: 0 16px;
            flex: 1;
            strong {
                font-weight: 700;
                font-style: normal;
                font-size: 24px;
                line-height: 28px;
                color: #3d3d4d;
            }
            p {
                margin-top: 4px;
                font-weight: 400;
                font-style: normal;
                font-size: 18px;
                line-height: 21px;
                color: #a8a8b3;
            }
        }
        svg {
            margin-left: auto;
            color: #c9c9d4;
        }
    }
`;
