// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};
const gameDir = 'C:\\Program Files (x86)\\Steam\\steamapps\\common';

export default class Settings extends Component<Props> {
  props: Props;
  openGameScanPrompt() {
    // let scannedPaths = scanFolder(gameDir);
    props.addFolder(gameDir);
  }

  launchGame(pathToExecutable) {
    console.log('launching game');
    launchFile(pathToExecutable);
    console.log('game launched?');
  }


  render() {
    const {
      addFolder
    } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <button onClick={() => addFolder(gameDir)}>Add Libraries</button>
        <button onClick={() => window.history.back()}>Back</button>
        {console.log('libraryState: ', this.props.library)}
        <div>
          <ul>
          {this.props.library.allGames.map(game => {
            return (
              <li onClick={() => this.launchGame(game.path + game.executableName)}>{game.executableName}</li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }
}

