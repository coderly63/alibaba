function applyMiddleWare(middleware) {
  function enhancer(createStore) {
    function newCreateStore(reducer) {
      const store = createStore(reducer)
      const func = middleware(store)
      const { dispatch } = store
      const newDispatch = func(dispatch)
      return { ...store, dispatch: newDispatch }
    }
    return newCreateStore
  }
  return enhancer
}

function logger(store) {
  return function (next) {
    return function (action) {
      console.log('=======before=======')
      const res = next(action)
      console.log(store.getState())
      console.log('=======after=======', res)
    }
  }
}

applyMiddleWare(logger)
