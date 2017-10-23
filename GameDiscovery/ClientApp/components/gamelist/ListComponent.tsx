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
  min-height: 90vh;
  max-height: 100vh;
  overflow: auto;
`;

export default class ListComponent extends React.Component<{items?: any, 'max-width'?: any}, {}> {
  public render() {
    const items = this.props;
    let listItems = [];

    
    return <div>
    <List style={{'max-width': this.props.items['max-width']}}>
      {
        this.props.items.map((item?: any, idx?: Number) => (
          <li>{item}</li>
        ))
      }
    </List>
    </div>;
  }
}