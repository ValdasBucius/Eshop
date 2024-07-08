import React from "react";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaClock, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FcShop } from "react-icons/fc";
import { IoMail } from "react-icons/io5";

import { VscAccount } from "react-icons/vsc";

export default function Header() {
  return (
    <header className="flex justify-center bg-stone-20 gap-16 items-center border rounded-b-lg">
      <div className="text-center">
        <FcShop />
      </div>

      <div>
        <div className="flex justify-between items-center gap-4 my-4">
          <div className="flex gap-1 items-center">
            <FaMapMarkerAlt size="1em" />
            <p>Dariaus ir Kęstučio g.3, Milašaičiai, Lietuva</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaClock size="1em" />
            <p>I-V 9-18 val. VI 10-14 val.</p>
          </div>
          <div className="flex gap-1 items-center">
            <IoMail size="1em" />
            <p>milasaiciai@cnc.lt</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaSquarePhone size="1em" />
            <p>+37036597422</p>
          </div>
        </div>

        <div className="flex p-0.5">
          <input className="w-full" type="text" placeholder="Search.." />
          <button className="hover:bg-orange-400" type="submit">
            🔎
          </button>
        </div>
      </div>

      <div className="flex gap-2 border p-2 rounded-sm">
        <div>
          <CiHeart color="red" size="2em" />
        </div>
        <div>
          <VscAccount color="black" size="2em" />
        </div>
        <div>
          <BsCart4 color="black" size="2em" />
        </div>
      </div>
    </header>
  );
}
