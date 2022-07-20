//defining consttant
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'

// State


const initialCounterState = {
    count: 0,
}

const initialUsersState = {
    users: [
        { name: 'Raihan' }
    ]
}


// Cation -Object- type, payload

// INCREMENT COUNTER

const incrementCounterAction = () => {
    return {
        type: 'INCREMENT'
    }
};
const decrementCounterAction = () => {
    return {
        type: 'DECREMENT'
    }
};

// DECREMENT COUNTER

const addUser = () => {
    return {
        type: 'ADD_USER',
        payload: [
            { name: 'Raihan' }
        ]
    }
};


const counterReducers = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        //
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        //

        default:
            return state;
    }
}



// 1. state
// 2. dispatch action
// 3. reducers
// 4. store










