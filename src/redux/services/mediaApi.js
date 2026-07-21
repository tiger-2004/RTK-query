import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIFFY_KEY = import.meta.env.VITE_GIFFY_KEY;

export const mediaApi = createApi({
  reducerPath: "mediaApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),

  endpoints: (builder) => ({
    // ==========================
    // Unsplash Photos
    // ==========================
    getPhotos: builder.query({
      query: ({ searchText, page = 1 }) => ({
        url: "https://api.unsplash.com/search/photos",

        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },

        params: {
          query: searchText,
          page,
          per_page: 20,
        },
      }),

      transformResponse: (response) =>
        (response.results ?? []).map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description || "Photo",
          thumbnail: item.urls.small,
          src: item.urls.regular,
          url: item.links.html,
        })),
    }),

    // ==========================
    // Pexels Videos
    // ==========================
    getVideos: builder.query({
      query: ({ searchText, perPage = 20 }) => ({
        url: "https://api.pexels.com/videos/search",

        headers: {
          Authorization: PEXELS_KEY,
        },

        params: {
          query: searchText,
          per_page: perPage,
        },
      }),

      transformResponse: (response) =>
        (response.videos ?? []).map((item) => ({
          id: item.id,
          type: "video",
          title: item.user?.name || "Video",
          thumbnail: item.image,
          src:
            item.video_files?.find(
              (video) => video.quality === "sd"
            )?.link ||
            item.video_files?.[0]?.link ||
            "",
          url: item.url,
        })),
    }),

    // ==========================
    // Giphy GIFs
    // ==========================
    getGIFs: builder.query({
      query: ({ searchText, limit = 20 }) => ({
        url: "https://api.giphy.com/v1/gifs/search",

        params: {
          api_key: GIFFY_KEY,
          q: searchText,
          limit,
        },
      }),

      transformResponse: (response) =>
        (response.data ?? []).map((item) => ({
          id: item.id,
          type: "gif",
          title: item.title || "GIF",
          thumbnail:
            item.images.preview_gif?.url ||
            item.images.fixed_height_small?.url,
          src: item.images.fixed_height?.url,
          url: item.url,
        })),
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetVideosQuery,
  useGetGIFsQuery,
} = mediaApi;