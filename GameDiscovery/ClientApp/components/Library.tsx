﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
const Window = styled.div`
  background-color: #252a30;
  color: #d6d2cb;
`;

export default class Library extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return <div>
      <Window>
        <p>Hi there</p>
      </Window>
    </div>;
  }
}
