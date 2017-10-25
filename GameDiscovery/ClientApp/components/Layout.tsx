import * as React from 'react';
import { NavMenu } from './NavMenu';
import styled from 'styled-components';

const Body = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: stretch;
    align-content: stretch;
    min-width: 700px;
    min-height: 600px;
    
    margin:0;

    background-color: #252a30;
    color: #d6d2cb;
`;
const Content = styled.div`
    @media (max-width: 1280px) and (orientation: landscape) {
        flex: 3;
    }
    @media (min-width: 1280px) {
        flex: 3;
    }
    @media (min-width: 768px) {
        margin-top: 50px;
    }

    width: 100%;
    height: 100%;
    flex-flow: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: stretch;
    align-content: stretch;
    margin-top: 5;
    padding-left: 0;
    padding-right: 0;
    background-color: #252a30;
    color: #d6d2cb;
    ul {
        padding-left: 0;
        list-style: none;
        li {
            padding-left: 5px;
        }
        li:nth-child(odd) {
            color: #afaca7;
            background-color: #333942;
        }
    }
`;
const NavWrapper = styled.div`
    padding-right: 0;
    padding-left: 0;
    flex: 1;
    @media (max-width: 1280px) and (orientation: landscape) {
        max-width: 260px;
    }
    @media (min-width: 1280px) {
        max-width: 260px;
    }
`;

export class Layout extends React.Component<{}, {}> {
    public render() {
      return <Body className='row'>
        <NavMenu />
        <Content className=''>
          {this.props.children}
        </Content>
      </Body>;
    }
}
