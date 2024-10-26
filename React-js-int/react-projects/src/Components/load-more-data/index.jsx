import { useState, useEffect } from "react";

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);


    useEffect(()=>{
        async function fetchProducts() {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://dummyjson.com/products?limit=20&skip=${count * 20}&select=title,price`
                );
                const result = await response.json();
                console.log(result); // Log the result to see the keys
    
                if (result && result.products && result.products.length) { // result.products result.products.length ???
                    // Update the products array with new data
                    setProducts((prevProducts) => [...prevProducts, ...result.products]);
                }
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
    
        fetchProducts();
    }, [count]); // Adding count as a dependency to fetch new data when count changes
    // useEffect is used when some change occures for instance : When [count]  changes from 0 to 1 the fetchProducts function is executed !
    // if we didn't use useEffect nothing would change meaning that the async function load more wouldn't be executed cause it's not called 
    
    if (loading) { // loading = true
        return <div>Loading Data! Please Wait.</div>;
    }

    return (
        <div className="container">
            <div>
                {products && products.length ? (
                    products.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No Products Found</p>
                )}
            </div>
            <button onClick={() => setCount(count + 1)}>Load More</button>
        </div>
    );
}
