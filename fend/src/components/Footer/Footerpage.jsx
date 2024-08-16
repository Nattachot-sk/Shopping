import React from "react";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLine,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footerpage() {
  return (
    <div className="w-full h-[350px] bg-neutral-800 ">
      <div className="w-full h-full grid grid-cols-3  justify-center text-white pt-20 pl-32">
        <div>
          <h1 className="font-bold text-[20px] mb-5">ข้อมูลบริษัท</h1>
          <ul>
            <li className="mb-1">
              {" "}
              <Link>เกี่ยวกับเรา</Link>
            </li>
            <li className="mb-1">
              {" "}
              <Link>ค้นหาร้านค้า</Link>
            </li>
            <li className="mb-1">
              {" "}
              <Link>ข่าวสาร</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-[20px] mb-5">Support</h1>
          <ul>
            <li className="mb-1">รับความช่วยเหลือ</li>
            <li className="mb-1">ทางเลือกการชำระเงิน</li>
            <li className="mb-1">ติดต่อเรา</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-[20px] mb-5">ติดตามเรา</h1>
          <ul>
            <li className="pl-4 hover:underline hover:cursor-pointer hover:text-blue-400 text-[26px]">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="pl-4 hover:underline hover:cursor-pointer  hover:text-blue-400 text-[26px]">
              <a
                href="https://www.line.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLine} />
              </a>
            </li>
            <li className="pl-4 hover:underline hover:cursor-pointer  hover:text-blue-400 text-[26px]">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
            <li className="pl-4 hover:underline hover:cursor-pointer  hover:text-blue-400 text-[26px]">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Copyright />
    </div>
  );
}

export default Footerpage;
