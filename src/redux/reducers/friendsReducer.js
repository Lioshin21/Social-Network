// API
import { userAPI } from "../../API/api"
// ActionTypes
import { friendsTypes } from "../types/types"


const initialState = {
    friends: [],
    totalCount: 0,
    isFetching: false,
    currentPage: 1,
    searchingName: '',
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case friendsTypes.GET_FRIENDS: return {
            ...state,
            friends: [...state.friends, ...action.friends],
            totalCount: action.totalCount
        };
        case friendsTypes.IS_FETCHING: return {
            ...state,
            isFetching: action.isFetching
        };
        case friendsTypes.UN_FOLLOW: return {
            ...state,
            friends: state.friends.map(friend => friend.id === action.id ? !friend.followed : friend).filter(friend => friend.followed),
            totalCount: state.totalCount - 1
        };
        case friendsTypes.SET_CURRENT_PAGE: return {
            ...state,
            currentPage: action.page
        }
        case friendsTypes.SET_SEARCHING_NAME: return {
            ...state,
            searchingName: action.searchingName,
        }
        case friendsTypes.CLEANING_STATE:
            return {
                ...state,
                currentPage: 1,
                friends: []
            }
        default: return state
    }
}


// actionCreators

const getFriendsAC = (friends, totalCount) => ({ type: friendsTypes.GET_FRIENDS, friends, totalCount })
const isFetchingAC = status => ({
    type: friendsTypes.IS_FETCHING,
    isFetching: status,
});
const unFollowAC = id => ({ type: friendsTypes.UN_FOLLOW, id })
const setCurrentPage = page => ({ type: friendsTypes.SET_CURRENT_PAGE, page })
const setSearchingName = searchingName => ({ type: friendsTypes.SET_SEARCHING_NAME, searchingName })


export const cleaningState = () => ({
    type: friendsTypes.CLEANING_STATE,
})

// Thunks

export const getFriends = (page, count, term = '') => {
    return dispatch => {
        dispatch(isFetchingAC(true))
        dispatch(setSearchingName(term))
        userAPI.getUsers(page, count, term, 'true')
            .then(response => {
                dispatch(getFriendsAC(response.items, response.totalCount))
                dispatch(isFetchingAC(false))
                dispatch(setCurrentPage(page))
            })
    }
}

export const unFollow = (id) => {
    return dispatch => {
        userAPI.unFollow(id)
            .then(() => {
                dispatch(unFollowAC(id))
            })
    }
}

export default friendsReducer;