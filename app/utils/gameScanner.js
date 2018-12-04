import find from 'find';
import { execFile } from 'child_process';


// TODO: check that current state does not include any of the outputs from this function.
export const scanFolder = (pathToFolder, excludedSubstrings = null) => {
  console.log('scanning folder: ', pathToFolder);
  const substrings = excludedSubstrings || [
    'directx',
    'redist',
    'workshop',
    'install'
  ];

  console.log(`attempting to scan folder ${pathToFolder}`);
  let files = find.fileSync(/\.exe$/, pathToFolder);
  let foundFiles = files.filter(file =>
    !substrings.some(substr => file.toLowerCase().indexOf(substr) >= 0)
  );
  console.log('scanned games: ', foundFiles);
  return foundFiles;
};

// TODO: use redux-persist from npm to save and load redux state
export const saveStateToDisk = (state) => {
  localStorage.setItem('gameDiscovery', JSON.stringify(state));
}
export const loadStateFromDisk = () => {
  return JSON.parse(localStorage.getItem('gameDiscovery'));
}

export const launchFile = (pathToExecutable) => {
  execFile(pathToExecutable);
};

export const getInfoFromPaths = (listOfExecutablePaths) => {
  // .map((gamePath, title, description, executableName)
  // let executableName = '';
  // let gamePath = '';
  let title = 'title';
  let description = 'description';
  let listOfGames = [];

  listOfExecutablePaths.map(path => {
    let executableName = path.split('\\').slice(-1)[0];
    // console.log('executableName: ', executableName);
    let gamePath = path.split('\\').slice(0, -1).join('/');
    listOfGames.push({
      gamePath,
      title,
      description,
      executableName
    })
  });
  console.log('game infos: ', listOfGames);
  return listOfGames;
};