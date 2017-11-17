import { HELLO_WORLD } from './../actions'
const helloWorld = (state = [], action) => {
    switch (action.type) {
        case HELLO_WORLD:
           return action.payload.map(User => {
                return {
                    ...User,
                }
            });

        default:
            return state
    }
}

export default helloWorld;