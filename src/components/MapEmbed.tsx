import React from "react";

const Map = () => {
  return (
    <>
      <div className="embed-container h-screen w-full">
        <small>
          <a
            href="//www.arcgis.com/apps/Embed/index.html?webmap=9ba9043482e84b608659de3e1f7fc9ab&extent=77.0934,28.6299,77.191,28.6775&zoom=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light"
            target="_blank"
          >
            View larger map
          </a>
        </small>
        <br />
        <iframe
          width="500"
          height="400"
          title="Delhi Population Density"
          src="//www.arcgis.com/apps/Embed/index.html?webmap=9ba9043482e84b608659de3e1f7fc9ab&extent=77.0934,28.6299,77.191,28.6775&zoom=false&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light"
        ></iframe>
      </div>
    </>
  );
};
export default Map;
