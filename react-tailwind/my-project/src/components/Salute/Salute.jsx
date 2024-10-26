function Saluation(){
    let isLogged = true ;
    let Nom = 'Ouafik';
    return (
        <>
        {/* {isLogged ? <h1 className="text-green-500">Welcome {Nom}</h1>
        : <h1 className="text-red-800">You are a guest memeber</h1>
        } */}
            {
                isLogged && 
                <h1 className="text-green-500" >Welcome {Nom}</h1>
            }
        </>
    )
}
export default Saluation