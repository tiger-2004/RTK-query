import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCollection } from "../redux/features/collectionSlice";
import { toast } from "react-toastify";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const collection = useSelector(
    (state) => state.collection.items
  );

  const alreadyExists = collection.some(
    (i) => i.id === item.id
  );

  const handleSave = () => {
    if (alreadyExists) {
      toast.warning("Item already exists in collection!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    dispatch(addToCollection(item));

    toast.success("Item added to collection!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-72">
      {/* Thumbnail */}
      <div className="h-48 overflow-hidden">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.thumbnail}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg line-clamp-2">
          {item.title}
        </h2>

        <p className="text-sm text-gray-500 capitalize mt-2">
          {item.type}
        </p>

        <div className="flex justify-between mt-4">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View
          </a>

          <button
          onClick={handleSave}
          disabled={alreadyExists}
          className={`px-3 py-1 rounded transition active:scale-95 text-white ${
            alreadyExists
              ? "bg-green-600 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
          }`}
        >
          {alreadyExists ? "Saved" : "Save"}
        </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;