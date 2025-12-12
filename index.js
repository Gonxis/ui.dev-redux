{
    type: "ADD_TODO",
    todo: {
        id: 1,
        name: "Learn Redux",
        complete: false,
    }
}

{
    type: "REMOVE_TODO",
    id: 1
}

{
    type: "TOGGLE_TODO",
    id: 1
}

{
    type: "ADD_GOAL",
    goal: {
        id: 1,
        name: "Run an ironman"
    }
}

{
    type: "REMOVE_GOAL",
    id: 1
}

const createStore = () => {
    /**
     * The store should have four parts
     * 1. The state
     * 2. Get the state.
     * 3. Listen to changes on the state.
     * 4. Update the state.
     */
}

let state
let listeners = []

const getState = () => state

const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
        listeners = listeners.filter(l => l !== listener)
    }
}

return {
    getState,
    subscribe,
}