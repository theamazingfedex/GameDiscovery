// @flow
import type { GetState, Dispatch } from '../reducers/types';
import { scanFolder, launchFile, getInfoFromPaths } from '../utils/gameScanner';

export const ADD_TO_LIBRARY = 'ADD_TO_LIBRARY';
export const REMOVE_FROM_LIBRARY = 'REMOVE_FROM_LIBRARY';

export function addGame(pathToGame, title, description, executableName) {
  console.log('adding game: ', pathToGame);
  return {
    type: ADD_TO_LIBRARY,
    data: {
      path: pathToGame,
      title,
      description,
      executableName
    }
  };
}

export function removeGame(pathToGame) {
  return {
    type: REMOVE_FROM_LIBRARY,
    data: pathToGame
  };
}
export function addFolder(pathToFolder) {
  return (dispatch: Dispatch, getState: GetState) => {
    // get the listof games from pathToFolder
    // add each individual game
    let scannedGames = scanFolder(pathToFolder);
    let infos = getInfoFromPaths(scannedGames);
    infos.map((game) => dispatch(addGame(game.gamePath, game.title, game.description, game.executableName)));
  };
}
export function removeFolder(pathToFolder) {
  return (dispatch: Dispatch, getState: GetState) => {
    // get the listof games from pathToFolder
    // add each individual game
    const gamesInFolder =
      getState.library.allGames.filter(game => game.path.contains(pathToFolder));

    gamesInFolder
      .map(gamePath => dispatch(removeGame(gamePath)));
  };
}

export function openAddFolderPrompt() {
  return {
    type: OPEN_ADD_FOLDER_PROMPT
  }
}
export function openAddSingleGamePrompt() {
  return {
    type: OPEN_ADD_SINGLE_GAME_PROMPT
  }
}
export function closeAddFolderPrompt() {
  return {
    type: CLOSE_ADD_FOLDER_PROMPT
  }
}
export function closeAddSingleGamePrompt() {
  return {
    type: CLOSE_ADD_SINGLE_GAME_PROMPT
  }
}

// export function incrementAsync(delay: number = 1000) {
//   return (dispatch: Dispatch) => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, delay);
//   };
// }

