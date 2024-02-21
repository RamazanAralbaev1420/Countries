import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const PageInfo = () => {
  const { fifa } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  console.log(fifa);

  // =====
  const changeBorder = (item) => {
    console.log(item);
    navigate(`/${item}`);
  };
  const data = useSelector((state) => state.country.data);
  const country = useSelector((state) => state.country.singlePage[0]);
  // -====

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${fifa}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [fifa]);

  console.log(post);
  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <div>
      <div className="container">
        <div className="controll-page">
          <button onClick={handleBack}>back</button>
        </div>
        {post.length > 0 ? (
          <>
            <div className="country-info">
              <div className="leftContentImage">
                <img src={post[0].flags.png} alt="" />
              </div>
              <div className="rightContentInfo">
                <div className="titleContryInner">
                  <h2>{post[0].name.common}</h2>
                </div>
                <div className="infoCountryInner">
                  <div className="leftInnerInfo">
                    <p>
                      <span>Название: </span>
                      {post[0].name.common}
                    </p>
                    <p>
                      <span>Население: </span>
                      {post[0].population}
                    </p>
                    <p>
                      <span>Регион: </span>
                      {post[0].region}
                    </p>
                    <p>
                      <span>СубРегион: </span>
                      {post[0].subregion}
                    </p>
                    <p>
                      <span>Столица: </span>
                      {post[0].capital}
                    </p>
                  </div>
                  <div className="rightInnerInfo">
                    <p>
                      <span>Домен верхного уровня: </span>
                      {post[0].tld}
                    </p>
                    <p>
                      <span>Валюта: </span>
                    </p>
                    <p>
                      <span>Языки: </span>
                    </p>
                  </div>
                </div>
                <div className="borders">
                  <span>Пограничные страны: </span>
                  {country.borders
                    ? post[0].borders.map((item) => {
                        return (
                          <button
                            key={item.population}
                            onClick={() => changeBorder(item)}
                          >
                            {item}
                          </button>
                        );
                      })
                    : 'Нету пограничных стран'}
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default PageInfo;
