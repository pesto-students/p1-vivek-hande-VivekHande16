const initialState = true;

const Flip = (state = initialState, action) => {
  switch (action.type) {
    case "FLIP":
      return !state;
    default:
      return state;
  }
};

export default Flip;
