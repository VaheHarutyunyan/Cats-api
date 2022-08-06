export const BASE_URL = "https://api.thecatapi.com/v1/images/search";
export const ALL_CATEGORIES = "https://api.thecatapi.com/v1/categories";
export const WITH_OUT_CATEGORIES = "https://api.thecatapi.com/v1/images/search?limit=10&page=1";
export const searchCategoriesById = (category_ids) => `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${category_ids}`