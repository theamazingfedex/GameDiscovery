import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  font-size: 24px;
  max-width: 30vw;
  border-style: solid;
  border-color: #CCC;
  border-width: 0 3px 0 0;
  border-radius: 5px;
  height: 100%;
  overflow: auto;
  min-width: 200px;
  flex-grow: 2;
  align-items: stretch;
  align-content: stretch;
`;

export default class ListComponent extends React.Component<{items?: any}, {}> {
  public render() {
    const items = this.props;
    let listItems = [];

    return <div>
    <List>
      {
        this.props.items.map((item?: any, idx?: Number) => (
          <li>{item}</li>
        ))
      }
    </List>
    </div>;
  }
}