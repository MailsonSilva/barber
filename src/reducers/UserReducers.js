export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
}

export const UserReducer = (state, action) => {
    switch(action.type) {
        //acao que possibilita trocar o valor o avatar
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar}
            break;
            default:
                return state
    }
}