import React from "react";
import { MenuList } from "../sub/Menulist";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menutitle">Album</h1>
      <p>이미지를 누르면 노래로 넘어갑니다!</p>
      <div className="menuList">
        {MenuList.map((menuitem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuitem.image}
              name={menuitem.name}
              price={menuitem.price}
              link={menuitem.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
