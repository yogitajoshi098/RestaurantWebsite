import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
import { useParams, Link } from 'react-router-dom';

const SearchElement = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const { searchTerm } = useParams();

    

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const result = await api.json();
                console.log(result, "result");
                setData(result.meals || [])
                setLoading(false)
            } catch (error) {
                throw Error("No recipe found")
            }

        }

        fetchData()
    }, [searchTerm]);

    return (
        <div>
            <Navbar />
            <div style={{
                width: '90%',
                margin: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
                gridGap: '1rem',
                marginTop: '2rem'
            }}>
                {loading ? <div style={{textAlign:"center"}} >Loading...</div> : (data?.map((mealCat, i) => {
                    return (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <Link className='link' to={`/${mealCat.idMeal}`} >
                                <div className="img">
                                    <img src={mealCat.strMealThumb} alt='meal' style={{ width: '13rem' }} />
                                </div>
                                <h2>{mealCat.strMeal}</h2>

                            </Link>
                        </div>
                    )

                }))
                }
                {!loading && data.length === 0 &&  <div style={{textAlign:"center"}}>No Recipe Found</div>}
            </div>
            <TrendingSlider />
        </div>
    )
}

export default SearchElement
