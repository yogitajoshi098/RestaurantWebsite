import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom'

const PopularSlider = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
            const result = await api.json();
            console.log(result);
            setData(result.meals)
        }

        fetchData()
    }, []);


    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div>

            <div
                style={{
                    height: '56vh',
                    width: '90%',
                    margin: "auto",

                }}
            >

                <Slider {...settings}
                    style={{

                        margin: "1rem",

                    }}
                >
                    {
                        data.map((meal, index) => {
                            return (
                                <div>

                                      <Link to={`/${meal.idMeal}`}>
                                    <div key={index} className='slider' >
                                        <img src={meal.strMealThumb} alt='meal' style={{ width: '18rem', height: '17rem' }} />
                                    </div>
                                    </Link>
                                </div>

                            )
                        })
                    }

                </Slider>

            </div>
        </div>
    )
}

export default PopularSlider
