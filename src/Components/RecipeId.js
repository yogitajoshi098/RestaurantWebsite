import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
import { useParams } from 'react-router-dom'



function RecipeId() {
    const [data, setData] = useState([]);
    const [active, setActive] = useState('Ingredient');
    const { idMeal } = useParams()


    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const result = await api.json();
            console.log(result);
            setData(result.meals[0])
        }

        fetchData()
    }, [idMeal]);



    return (
        <div>
            <Navbar />
            <div style={{ widows: '90%', margin: 'auto', textAlign: 'center' }}>
                <h1>{data.strMeal}</h1>
                <div className='flex' style={{
                    display: 'flex',


                }}>
                    <div className="img"
                        style={{ width: '30%', marginTop:'2rem' }}
                    >
                        <img src={data.strMealThumb} alt='meal' style={{ width: '18rem' }} />

                    </div>
                    <div className='content' style={{ width: '60%' }}>
                        <button className='btn' onClick={() => { setActive('Ingredient') }}>Ingredient</button>
                        <button className='btn' onClick={() => { setActive('Instruction') }}> Instructions</button>
                        {
                            active === 'Ingredient' ? (
                                <div>
                                   <div style={{fontSize:'1.5rem', fontWeight:'bold'}}> <h2>{data.strIngredient1}- {data.strMeasure1}</h2></div>
                                   <div style={{fontSize:'1.5rem', fontWeight:'bold'}}> <h2>{data.strIngredient2}- {data.strMeasure2}</h2></div>
                                   <div style={{fontSize:'1.5rem', fontWeight:'bold'}}><h2>{data.strIngredient3}- {data.strMeasure3}</h2></div>
                                    <div style={{fontSize:'1.5rem', fontWeight:'bold'}}><h2>{data.strIngredient4}- {data.strMeasure4}</h2></div>
                                 <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>   <h2>{data.strIngredient5}- {data.strMeasure5}</h2></div>
                                 <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>   <h2>{data.strIngredient6}- {data.strMeasure6}</h2></div>
                                </div>
                            ) : <p>{data.strInstructions} </p>
                        }


                    </div>
                </div>
            </div>
            <div style={{marginTop:'1rem'}}>
            <TrendingSlider />
            </div>
            
        </div>
    )
}

export default RecipeId
