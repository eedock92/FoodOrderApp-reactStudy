import {useState,  useEffect} from 'react'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'



const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [httpError, setHttpError] = useState()


  useEffect(() => {
    setLoading(true)
    setHttpError(false)

    const fetchMeals = async () => {

     
      const response = await fetch('https://reactstudy-2a8eb-default-rtdb.firebaseio.com/meals.json');

      if(!response.ok){
        throw new Error('Something went wrong')
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData){
        loadedMeals.push({
          id: key,
          name : responseData[key].name,
          description : responseData[key].description,
          price : responseData[key].price
        })
      }

      setMeals(loadedMeals)
      setLoading(false)
    };

   
      fetchMeals().catch((error) =>{
      setLoading(false)
      setHttpError(error.message)
      });

    

  }, [])

    if(loading){
      return (
        <section className={classes.mealsLoading}>
          <p>Loading ...</p>
        </section>
      )
    }

    if(httpError){
      return (
        <section className={classes.mealsError}>
          <p>{httpError}</p>
        </section>
      )
    }
  

    const mealsLisst = meals.map(meal => 
      
    <MealItem id={meal.id}
             key={meal.id} 
             name={meal.name} 
             description={meal.description}
             price={meal.price}/>)

    return ( 
    <section className={classes.meals}>
        <Card>
          
      
        <ul>
          {mealsLisst}
        </ul>
        </Card>
    </section>)
}

export default AvailableMeals