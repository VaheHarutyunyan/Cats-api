import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loadCategories, loadCatsDefault} from "../../store/cats/cats-action";
import {selectAllCategories} from "../../store/cats/cats-selector";
import Menu from "./Menu";
import "./style.scss";
import "../../assets/icon/toggle.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectAllCategories);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadCatsDefault());
  }, [dispatch]);

  const Navbar = categories.map(({id, name}) => {
    const handleClick = () => {
      if (id) {
        navigate(`/category/${id}`);
      }
      setIsOpen(false);
    };
    return <Menu key={id} name={name} onClick={handleClick} />;
  });

  return (
    <header>
      <div className="container">
        <nav>
          <div className="brand" onClick={() => navigate(`/`)}>
            <h2>CATS</h2>
          </div>
          <div className={`navbar  ${isOpen ? "open" : ""}`}>
            <ul>{Navbar}</ul>
          </div>
          <div className="toggle">
            <button onClick={() => setIsOpen(e => !e)}></button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
