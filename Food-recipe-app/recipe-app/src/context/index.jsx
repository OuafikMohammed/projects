import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList , setFavoritesList ] = useState([]);
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true); // Start loading before fetching data
        try {
            const resp = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await resp.json();

            if (data?.data?.recipes) {
                setRecipeList(data.data.recipes);
                navigate('/');
            } else {
                console.log("No recipes found");
            }
        } catch (e) {
            console.error("Error fetching recipes:", e);
        } finally {
            setLoading(false); // Stop loading after fetch is done
            setSearchParam(''); // Reset search parameter
        }
        console.log('Loading:', loading);
        console.log('Recipe List:', recipeList);
    }
    function handleAddToFavorite(getCurrentItem){
        console.log(getCurrentItem);
        let cpyFavoritesList = [...favoritesList]
        const index = cpyFavoritesList.findIndex(item => item.id === getCurrentItem.id )

        if ( index === -1){
            cpyFavoritesList.push(getCurrentItem)
        } else {
            cpyFavoritesList.splice(cpyFavoritesList)        
        }
        setFavoritesList(cpyFavoritesList)
    }
    console.log(favoritesList ,'favoritesList');  
    return (
        <GlobalContext.Provider value={{
            searchParam,
            loading,
            recipeList,
            setSearchParam,
            handleSubmit,
            recipeDetailsData, // Added to context value
            setRecipeDetailsData, // Ensure this is accessible in Details component
            handleAddToFavorite,
            favoritesList
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
