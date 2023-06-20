import React from "react";
import { useState } from "react";

const CollaboratorsList = ({ colaborators }) => {
  const [hoveredColaborator, setHoveredColaborator] = useState(null);

  return (
    <div className="text-sm flex">
      {colaborators &&
        colaborators.map((colaborator, index) => (
          <div
            className="relative"
            key={index}
            onMouseEnter={() => setHoveredColaborator(colaborator)}
            onMouseLeave={() => setHoveredColaborator(null)}
          >
            <span className="p-1 bg-sky-400 flex items-center justify-center w-8 h-8 rounded-full mr-1 text-white">
              {colaborator &&
                colaborator
                  .split(" ")
                  .map((name) => name[0].toUpperCase())
                  .join("")}
            </span>
            {hoveredColaborator === colaborator && (
              <span className="absolute top-10 left-1/2 transform -translate-x-1/2 w-max bg-white p-2 text-black rounded-md shadow-md">
                {hoveredColaborator}
              </span>
            )}
          </div>
        ))}
    </div>
  );
};

export default CollaboratorsList;
