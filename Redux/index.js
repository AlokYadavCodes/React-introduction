const redux = require("redux");

const INITIAL_VALUE = { count: 0 };

function reducer(store = INITIAL_VALUE, action) {
    let newStore=store;
    if(action.type==='INCREMENT'){
        newStore={count: ++newStore.count}
    } else if (action.type==='DECREMENT'){
        newStore={count: --newStore.count}
    }
    return newStore;

}

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
// store.subscribe(subscriber);


store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})

