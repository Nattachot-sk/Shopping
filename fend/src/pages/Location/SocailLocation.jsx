import React from "react";

function SocailLocation() {
  return (
    <div>
      <div>
        <ul className="flex mr-5">
          <li className="pl-4 hover:underline hover:cursor-pointer hover:text-blue-400">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li className="pl-4 hover:underline hover:cursor-pointer  hover:text-blue-400">
            <a href="https://www.line.com" target="_blank" rel="noopener noreferrer">Line</a>
          </li>
          <li className="pl-4 hover:underline hover:cursor-pointer  hover:text-blue-400">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">Tiktok</a>
          </li>
          <li className="pl-4 hover:underline hover:cursor-pointer  hover:text-blue-400">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul> 
      </div>
    </div>
  );
}

export default SocailLocation;
