import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const favoritesApi = createApi({
    reducerPath: 'favorites',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints(builder) {
        return {
            fetchFavoriteMovies: builder.query({
                query: () => {
                    return {
                        url: 'favorites',
                        method: 'GET',
                    };
                },
            }),
            addFavoriteMovie: builder.mutation({
                query: (id) => ({
                    url: '/favorites',
                    method: 'POST',
                    body: { id },
                }),
            }),
        };
    },
});

export const { useFetchFavoriteMoviesQuery } = favoritesApi;
export const { useAddFavoriteMovieMutation } = favoritesApi;
export { favoritesApi };
