const initialState = {
    users: []
}

const rootReducer = (state = initialState, option) => {
    switch (option.type) {
        case 'GET_USERS':
            console.log(option.payload)
            return({
                ...state,
                users: option.payload
            })
    
        default:
           return state
    }
}

export default rootReducer;