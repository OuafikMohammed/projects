import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../14-App/features/compteur/countSlice";

function Count() {
    const dispatch = useDispatch();
    const nombre = useSelector((state) => state.compteur.nombre);

    return (
        <div className="flex-1 justify-center text-center">
            <h1>Valeur actuelle : {nombre}</h1>
            <button
                className="text-black bg-green-600 hover:bg-green-700 animate-pulse"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                className="text-black bg-red-600 hover:bg-red-700 animate-pulse"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <button
                className="text-black bg-yellow-600 hover:bg-yellow-700 animate-pulse"
                onClick={() => dispatch(reset())}
            >
                Reset
            </button>
        </div>
    );
}

export default Count;
