import reducers from '../reducers';

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      sendingRequest: false
    });
  });
  // it('Should invalidate token', () => {

  // })
});
