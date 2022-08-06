import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCatsDefault} from "../../store/cats/cats-action";
import {Loader, selectCatsDefault} from "../../store/cats/cats-selector";
import Card from "../Card/Card";
import LoaderComponent from "../LoaderComponent/Loader";

const HomePage = () => {
  const dispatch = useDispatch();

  const initialList = useSelector(selectCatsDefault);
  const loader = useSelector(Loader);


  useEffect(() => {
    dispatch(loadCatsDefault());
  }, [dispatch]);

  return loader === "loading" ? (
    <>
      <LoaderComponent />
    </>
  ) : (
    <div className="cats-container">
      <div className="row">
        {initialList.map(item => {
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

export default HomePage;
