// * sample code
// * array-base approach to update a (reducer-state) - reducer must be (array-base)
const state = [
  {
    title: '12 kisses of life',
    description: 'jordan petersen',
    id: 2
  },

  {
    title: '12 rules of life',
    description: 'jordan petersen',
    id: 1
  }
];

const data = {
  title: '12 sucks of life',
  description: 'jordan petersen',
  id: 1
};
const upadate = { type: 'update', payload: data };

function reducer(state = [], action) {
  switch (action.type) {
    case 'update':
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        }
        return stream;
      });

    default:
      return [];
  }
}

reducer(state, upadate);

// * object-base approach to update a (reducer-state) - reducer must be (object-based)
const stateOne = {
  '1': {
    title: '12 rules of life',
    description: 'jordan petersen',
    id: 1
  }
};
// ! This siruatuin of stateOne can be achieved by converting array-data into object-data
// ! by using ( _.mapKeys(array-data, which-property) )

const dataOne = {
  id: 1,
  title: '12 rules of life',
  description: 'jordan petersen'
};
const action = { type: 'update', payload: dataOne };

function reducerOne(state = {}, action) {
  switch (action.type) {
    case 'update':
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
}
reducerOne(stateOne, action);
