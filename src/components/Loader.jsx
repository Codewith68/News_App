import React from "react";

function Loader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-sm opacity-70">Loading latest news...</p>
      </div>
    </div>
  );
}

export default Loader;
