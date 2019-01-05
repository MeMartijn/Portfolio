import { PLAY_NEXT_ANIMATION } from './types';

export const playNextAnimation = () => dispatch => {
    dispatch({
        type: PLAY_NEXT_ANIMATION
    })
}