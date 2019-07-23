// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Settings.css';

import config from '../../configs/userSettings.config.json';
import fs from 'fs';

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

  saveLibrary(library) {
    console.log('saving library...');
    const configPath = './configs/userSettings.config.json';
    fs.readFile(configPath, (err, configData) => {
      if (err) {
        return console.log(err);
      }

      const newLibrary = {...configData, library};
      fs.writeFile(configPath, newLibrary, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('Library saved successfully.');
      });
    })
    console.log('library saved.');
  }

  loadLibrary() {
    fs.readFile(configPath, (err, configData) => {
      if (err) {
        return console.log(err);
      }
      setLibrary(configData.library);
    }
  }

  render() {
    const {
      addFolder
    } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <button onClick={() => addFolder(gameDir)}>Scan Folder</button>
        <button onClick={() => window.history.back()}>Back</button>
        {console.log('libraryState: ', this.props.library)}
        <div>
          <h3>Scanned Games:</h3>
          <ul>
          {this.props.library.allGames.map(game => {
            return (
              <li className={styles.scannedGameContainer}>
                <input type='checkbox'/>
                <div onClick={() => this.launchGame(game.path + game.executableName)}>{game.executableName}</div>
              </li>
            )
          })}
          <button onClick={() => saveLibrary(this.props.library)}>Save Selected Games</button>
          </ul>
        </div>
      </div>
    );
  }
}

