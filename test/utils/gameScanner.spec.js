import { spy } from 'sinon';
import gameScanner from '../../app/utils/gameScanner';

describe('gameScanner', () => {
  it('scanFolder scans a given folder', () => {
    const gamesScanned = gameScanner.scanFolder('./');
    //failing test for now:
    expect(true == false);
  });
});
