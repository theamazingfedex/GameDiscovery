// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import List from './gamelist/ListComponent';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as LibraryState from '../store/Library';

type LibraryProps =
  LibraryState.LibraryState
  & typeof LibraryState.actionCreators
  & RouteComponentProps<{ activeTitle: string }>; 

const Window = styled.div`
  background-color: #252a30;
  color: #d6d2cb;
  height: -webkit-fill-available;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  padding-top: 5px;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
const InfoContainer = styled.div`
  flex-grow: 1;
  min-height: 600px;
  min-width: 800px;
  padding-left: 15px;

  h3 {
    margin-top: 5px;
  }
`;
const username = 'Daniel'; // this will ideally be populated from the user profile on page load.
const gameNames = ['Rocket League', 'Elite Dangerous', 'Beat Saber', 'Morrowind', 'Skyrim', 'Oblivion', 'Fallout 3', 'Fallout 4', 'Fallout: New Vegas', 'No Man\'s Sky'];

class Library extends React.Component<LibraryProps, {}> {
  public render() {
    return <Window>
      <List items={gameNames} onItemClicked={this.props.setActiveTitle}/>
        <InfoContainer>
        <h3>Well hello there, {username}</h3>
        <h4>Selected Title: {this.props.activeTitle}</h4>
        </InfoContainer>
      </Window>;
  }
}

//export default connect(
//  (state: ApplicationState) => state.library.activeTitle,
  //LibraryState.actionCreators)(Library);// as typeof Library;

export default connect(
  (state: ApplicationState) => state.library,
  LibraryState.actionCreators
)(Library) as typeof Library;
