import { SET_CATS_BY_CATEGORIES, SET_CATEGORIES, SET_CATS_DEFAULT, SET_ERROR, SET_LOADING } from "./cats-action";

const initialState = {
    status: "idle",
    categories: [],
    list: [],
    initialList: [],
    error: null,
};

export const catsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
                status: "succes",
            };
        case SET_CATS_BY_CATEGORIES:
            return {
                ...state,
                list: payload,
                status: "succes",
            };
        case SET_CATS_DEFAULT:
            return {
                ...state,
                initialList: payload,
                status: "succes",
            };
        case SET_ERROR:
            return {
                ...state,
                status: "faild",
                error: payload,
            };
        case SET_LOADING:
            return {
                ...state,
                status: "loading",
                error: null,
            };

        default:
            return state;
    }
};