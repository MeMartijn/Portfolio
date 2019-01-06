import { PLAY_NEXT_ANIMATION } from '../actions/types';

const initialState = {
    animationFlow: ['IntroductionTagline']
}

export default function(state = initialState, action) {
    switch(action.type) {
        case PLAY_NEXT_ANIMATION:
            return {
                ...state,
                animationFlow: state.animationFlow.slice(1, state.animationFlow.length)
            }
        default:
            return state
    }
}