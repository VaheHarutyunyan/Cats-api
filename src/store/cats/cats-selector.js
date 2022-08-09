export const selectAllCategories = (state) => state.cats.categories;
export const selectCatsByCategories = (state) => state.cats.list;
export const selectCatsDefault = (state) => state.cats.initialList;
export const selectStatus = (state) => state.cats.status;

export const Loader = (state) => state.cats.status;
