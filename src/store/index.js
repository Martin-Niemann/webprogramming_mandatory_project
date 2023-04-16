import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import { searchMovieSlice } from './slices/searchMovieSlice';

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
        [searchMovieSlice.name]: searchMovieSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
        return getDefaultMiddleware()
            .concat(moviesApi.middleware);
    }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery } from './apis/moviesApi';
export { useFetchHighestRatedMoviesQuery } from './apis/moviesApi';
export { useFetchSearchMovieQuery } from './apis/moviesApi';
export { useFetchMovieByIdQuery } from './apis/moviesApi';
export { changeSearchTerm } from './slices/searchMovieSlice';