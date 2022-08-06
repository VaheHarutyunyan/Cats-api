import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadCategoriesById} from "../../store/cats/cats-action";
import {Loader, selectCatsByCategories} from "../../store/cats/cats-selector";
import Card from "../Card/Card";
import LoaderComponent from "../LoaderComponent/Loader";

const Category = () => {
  const {ids} = useParams();
  const dispatch = useDispatch();

  const list = useSelector(selectCatsByCategories);
  const loader = useSelector(Loader);

  useEffect(() => {
    ids && dispatch(loadCategoriesById(ids));
  }, [ids, dispatch]);

  return loader === "loading" ? (
    <>
      <LoaderComponent />
    </>
  ) : (
    <div className="cats-container">
      <div className="row">
        {list.map(item => {
          const carsProps = {
            id: item.id,
            url: item.url,
            width: item.width,
            height: item.height,
          };
          return <Card key={item.id} {...carsProps} />;
        })}
      </div>
    </div>
  );
};

export default Category;
