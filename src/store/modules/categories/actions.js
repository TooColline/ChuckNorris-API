import types from './types';
import { categories } from '../../apis/chuckNorrisApi';

export const loadCategories = () => ({
    type: types.LOAD_CATEGORIES
});

export const setCategories = () => ({
    type: types.LOAD_CATEGORIES_SUCCESS,
    payload: categories
});

export const setCategoryError = () => ({
    type: types.LOAD_CATEGORIES_FAIL,
    payload: error
});