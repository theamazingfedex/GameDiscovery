import * as React from 'react';
import { NavMenu } from './NavMenu';
import styled from 'styled-components';

const Body = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;

`;
const Content = styled.div`
    width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    padding-left: 0;
    padding-right: 0;
`;
const NavWrapper = styled.div`
    padding-right: 0;
    padding-left: 0;
`;

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className='container-fluid'>
            <Body className='row'>
                <NavWrapper className='col-sm-3'>
                    <NavMenu />
                </NavWrapper>
                <Content className='col-sm-9'>
                    { this.props.children }
                </Content>
            </Body>
        </div>;
    }
}
