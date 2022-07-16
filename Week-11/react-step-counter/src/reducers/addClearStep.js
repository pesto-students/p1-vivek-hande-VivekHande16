const initialState = 0;

const counter = (state = initialState, action) => {
    switch(action.type) {
        case "ADD": return state + 1; 
        case "CLEAR": return 0;
        default: return state;
    }
}

export default counter;