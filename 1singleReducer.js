const redux = require("redux");
const createStore = redux.legacy_createStore;

const BUY_CAKE = "BUY_CAKE";

// Action: is a object with type property
// Action creator: is a function that returns an action
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

const initialState = {
  numOfCakes: 10,
};

// Reducer: (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log("Called");
unsubscribe();
