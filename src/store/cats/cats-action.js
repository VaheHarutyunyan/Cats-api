export const SET_CATEGORIES = "@@cats/SET_CATEGORIES";
export const SET_CATS_BY_CATEGORIES = "@@cats/SET_CATS_BY_CATEGORIES";
export const SET_CATS_DEFAULT = "@@cats/SET_CATS_DEFAULT";
export const SET_LOADING = "@@cats/SET_LOADING";
export const SET_ERROR = "@@cats/SET_ERROR";

export const setCatsByCategories = cats => ({
  type: SET_CATS_BY_CATEGORIES,
  payload: cats,
});
export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setCatsDefault = defaultState => ({
  type: SET_CATS_DEFAULT,
  payload: defaultState,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

export const loadCategories =
  () =>
  (dispatch, _, {client, api}) => {
    dispatch(setLoading());

    client
      .get(api.ALL_CATEGORIES)
      .then(({data}) => dispatch(setCategories(data)))
      .catch(err => dispatch(setError(err.message)));
  };

export const loadCategoriesById =
  category_ids =>
  (dispatch, _, {client, api}) => {
    dispatch(setLoading());

    client
      .get(api.searchCategoriesById(category_ids))
      .then(({data}) => dispatch(setCatsByCategories(data)))
      .catch(err => dispatch(setError(err.message)));
  };

export const loadCatsDefault =
  () =>
  (dispatch, _, {client, api}) => {
    dispatch(setLoading());
    client
      .get(api.WITH_OUT_CATEGORIES)
      .then(({data}) => dispatch(setCatsDefault(data)))
      .catch(err => dispatch(setError(err.message)));
  };
