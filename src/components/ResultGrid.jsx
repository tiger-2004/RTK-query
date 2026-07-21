import React from "react";
import { useSelector } from "react-redux";
import {
  useGetPhotosQuery,
  useGetVideosQuery,
  useGetGIFsQuery,
} from "../redux/services/mediaApi";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTabs } = useSelector((store) => store.search);

  const {
    data: photoData = [],
    isLoading: photoLoading,
    error: photoError,
  } = useGetPhotosQuery(
    { searchText: query },
    {
      skip: activeTabs !== "photos" || !query,
    }
  );

  const {
    data: videoData = [],
    isLoading: videoLoading,
    error: videoError,
  } = useGetVideosQuery(
    { searchText: query },
    {
      skip: activeTabs !== "videos" || !query,
    }
  );

  const {
    data: gifData = [],
    isLoading: gifLoading,
    error: gifError,
  } = useGetGIFsQuery(
    { searchText: query },
    {
      skip: activeTabs !== "gif" || !query,
    }
  );
  

  const displayData =
    activeTabs === "photos"
      ? photoData
      : activeTabs === "videos"
      ? videoData
      : gifData;

  const loading =
    activeTabs === "photos"
      ? photoLoading
      : activeTabs === "videos"
      ? videoLoading
      : gifLoading;

  const error =
    activeTabs === "photos"
      ? photoError
      : activeTabs === "videos"
      ? videoError
      : gifError;

  if (!query.trim()) {
    
    return (
      <div className="flex justify-center items-center h-80 text-gray-500 text-lg">
        Search for Photos, Videos or GIFs
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80 text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-80 text-red-500 text-lg">
        Something went wrong. Please try again.
      </div>
    );
  }

  if (displayData.length === 0) {
    
    return (
      <div className="flex justify-center items-center h-80 text-gray-500 text-lg">
        No results found.
      </div>
    );
  }
  

  return (
    <div className="flex flex-wrap justify-center gap-6 px-8 py-6">
      {displayData.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;