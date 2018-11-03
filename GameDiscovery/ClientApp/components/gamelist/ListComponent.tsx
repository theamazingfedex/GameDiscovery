import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  font-size: 24px;
  max-width: 35vw;
  border-style: solid;
  border-color: #CCC;
  border-width: 0 3px 0 0;
  border-radius: 5px;
  height: 100%;
  overflow-y: auto;
  min-width: 200px;
  flex-grow: 2;
  align-items: stretch;
  align-content: stretch;
  margin-right: 10px;
`;

export default class ListComponent extends React.Component<{ items?: any, onItemClicked?: any }, {}> {

  public onClicked(text: string) {
    return () => {
      this.props.onItemClicked(text);
      //alert('set active title: ' + text);
    };
  }
  public render() {
    let listItems = this.props.items;
    let onItemClicked = this.props.onItemClicked;

    return <div>
    <List>
      {
          listItems.map((item: any, idx: number) => (
            <li onClick={this.onClicked(item)}>{idx+1}: {item}</li>
        ))
      }
    </List>
    </div>;
  }
}