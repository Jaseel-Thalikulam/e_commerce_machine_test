import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input } from "antd";
import "../../styles/header.css";
import { Link, useLocation } from "react-router-dom";
import { useCustomContext } from "../../context/CustomContext";
import axios from "axios";
import { FilterOutlined } from "@ant-design/icons";
function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const { pathname } = useLocation();

  const items = [
    {
      label: "Home",
      path: "/",
      key: "home",
    },
    {
      label: "Cart",
      key: "cart",
      path: "/cart",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { setSearchValue, selectedCategory, setSelectedCategory } =
    useCustomContext();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    (async function getCategories() {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );

      setCategories(data);
    })();
  }, []);

  

  const dropDownItems = [
    {
      key: "category_all",
      label: <a onClick={() => handleDropdownClick("")}>All</a>,
    },
    ...categories.map((category, index) => ({
      key: `category_${index}`,
      label: <a onClick={() => handleDropdownClick(category)}>{category}</a>,
    })),
  ];

  const handleDropdownClick = (category: string) => {
    if (selectedCategory === category) return;
    setSelectedCategory(category);
  };

  return (
    <>
      <header className="header">
        <div className="logo" />
        <div className="search--bar">
          <Input
            variant="borderless"
            placeholder="Search..."
            size="small"
            onChange={(e) => handleSearchInputChange(e)}
          />
          <Dropdown menu={{ items: dropDownItems }} placement="bottomRight">
            <Button className="filter--btn">
              <FilterOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`navigation--bar ${menuOpen ? "active" : ""}`}>
          {items.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.key}
                to={item.path}
                className={isActive ? "link--active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
