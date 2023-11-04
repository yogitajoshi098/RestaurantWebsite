import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const TrendingSlider = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
            const result = await api.json();
            console.log(result);
            setData(result.meals)
        }

        fetchData()
    }, []);


    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>

            <div
                style={{
                    height: '26vh',
                    width: '99%',
                    margin: "auto",
overflow:'hidden'
                }}
            >

                <Slider {...settings}
                    style={{

                        marginTop: "1rem",

                    }}
                >
                    {
                        data.map((meal, index) => {
                            return (
                                <div>

                                    <Link to={`/${meal.idMeal}`}>
                                        <div key={index} className='slider2' >
                                            <img src={meal.strMealThumb} alt='meal' style={{ width: '10rem', height: '7rem' }} />
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

export default TrendingSlider
