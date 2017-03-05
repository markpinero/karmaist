import reducers from '../reducers';

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(reducers(undefined, {}))
      .toEqual(
        {
          isFetching: false,
          validToken: null,
          token: null
        }
      )
  })
  // it('Should invalidate token', () => {

  // })
})