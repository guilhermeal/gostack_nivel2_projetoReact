import styled, { css } from 'styled-components';

import { shade, lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 4px solid #fff;

    ${props =>
      props.hasError &&
      css`
        background: ${lighten(0.45, '#c53030')};
        border: 4px solid #c53030;
        border-right: 0;
      `}

    &::placeholder {
      color: #a8a8b4;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #8e71b2;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.35s;

    &:hover {
      background: ${shade(0.55, '#8E71B2')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.3s;
    transition: background-color 0.15s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(20px);
      background: ${lighten(0.35, '#8e71b2')};

      img {
        background: ${shade(0.02, '#8e71b2')};
      }
    }

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      border: 4px solid #8e71b2;
      padding: 4px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #999c;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #999f;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;
