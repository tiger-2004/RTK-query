import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const tabs = [
  {
    id: "photos",
    label: "Photos",
  },
  {
    id: "videos",
    label: "Videos",
  },
  {
    id: "gif",
    label: "GIFs",
  },
];

const Tabs = () => {
  const dispatch = useDispatch();

  const { activeTabs } = useSelector((store) => store.search);

  return (
    <div className="flex justify-center gap-4 my-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => dispatch(setActiveTabs(tab.id))}
          className={`px-5 py-2 rounded-lg transition-all duration-200 ${
            activeTabs === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;