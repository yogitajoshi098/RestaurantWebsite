import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
const Category = () => {
    const [data, setData] = useState([])
    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
            const result = await api.json();
            console.log(result);
            setData(result.meals)
        }

        fetchData()
    }, [name]);
    
    
    return (
        <div>
            <Navbar/>
            <div style={{
                width:'90%',
                margin:'auto',
                display:'grid',
                gridTemplateColumns:'repeat(auto-fit, minmax(15rem, 1fr))',
                gridGap: '1rem',
                marginTop:'2rem'
            }}>
            {data.map((mealCat, i) => {
                return (
                    <div key={i} style={{textAlign:'center'}}>
                        <Link className='link'    to={`/${mealCat.idMeal}`} >
                        <div className="img">
                            <img src={mealCat.strMealThumb} alt='meal' style={{width:'13rem'}} />
                        </div>
                        <h2>{mealCat.strMeal}</h2>

</Link>
                    </div>
                )
                
            })}
            </div>
            <TrendingSlider/>
        </div>
    )
}

export default Category
