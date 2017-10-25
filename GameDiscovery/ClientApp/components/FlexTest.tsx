import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import List from './gamelist/ListComponent';
import styled from 'styled-components';

const FlexWindow = styled.div`
  background-color: #ccc;
`;

export default class FlexTest extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return <FlexWindow className="flex">
      <header></header>
      <article></article>
      <aside></aside>
      <footer></footer>
    </FlexWindow>
  }
}