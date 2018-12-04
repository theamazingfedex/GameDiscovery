import { spy } from 'sinon';
import * as actions from '../../app/actions/library';

describe('library actions', () => {
  it('should add a game if addGame action', () => {
    expect(dispatch.calledWith{ type: actions.ADD_TO_LIBRARY })
  });

  it('should remove a game if removeGame action', () => {
    expect(dispatch.calledWith{ type: actions.REMOVE_FROM_LIBRARY })
  });

  it('should incrementIfOdd should create increment action', () => {
    const fn = actions.incrementIfOdd();
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    const getState = () => ({ counter: 1 });
    fn(dispatch, getState);
    expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).toBe(true);
  });

  it('should incrementIfOdd shouldnt create increment action if counter is even', () => {
    const fn = actions.incrementIfOdd();
    const dispatch = spy();
    const getState = () => ({ counter: 2 });
    fn(dispatch, getState);
    expect(dispatch.called).toBe(false);
  });

  // There's no nice way to test this at the moment...
  it('should incrementAsync', done => {
    const fn = actions.incrementAsync(1);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    fn(dispatch);
    setTimeout(() => {
      expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).toBe(
        true
      );
      done();
    }, 5);
  });
});

