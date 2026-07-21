import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCollection } from "../redux/features/collectionSlice";
import { toast } from "react-toastify";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCollection(item.id));

    toast.info("Item removed from collection!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
      >
        {item.type === "photo" && (
          <img
            className="w-full h-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        )}

        {item.type === "video" && (
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            controls
            src={item.src}
          />
        )}

        {item.type === "gif" && (
          <img
            className="w-full h-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        )}
      </a>

      <div className="flex justify-between gap-4 items-center w-full px-6 py-4 absolute bottom-0 text-white">
        <h2 className="text-xl font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>

        <button
          onClick={handleRemove}
          className="px-3 py-1 bg-red-600 rounded-md active:scale-95 transition cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;