import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    margin-top: 80px;
    max-width: 450px;
    line-break: 56px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border: 0;
        border-radius: 0px 5px 5px 0px;
        color: #fff;
        font-weight: bold;
        transition: all 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 120px;
    max-width: 700px;
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
        img {
            height: 83px;
            width: 83px;
            border-radius: 50%;
            margin-right: 22px;
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
