import  {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction, deleteProductAction, UpdateProductAction } from '../Redux/Actions/produitActions';

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [product, setProduct] = useState({
        id: '',
        designation: '',
        price: '',
        quantite: ''
    });

    const addProduct = () => {
        // Validate inputs
        if (!product.id || !product.designation || !product.price || !product.quantite) {
            alert("Veuillez remplir tous les champs");
            return;
        }
        // Check if the product already exists
        if (products.find((p) => p.id === product.id)) {
            alert("Un produit avec cet ID existe déjà");
            return;
        }

        // Dispatch add product action
        dispatch(addProductAction(product));
        console.log(product)
        console.log(products)
        // Reset input fields
        setProduct({
            id: '',
            designation: '',
            price: '',
            quantite: ''
        });
    };
    const UpdateProduct = () => {
        dispatch(UpdateProductAction(product));
    }
    const deleteProduct = (id) => {
        dispatch(deleteProductAction(id));
    };

    return (
        <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-900 text-white">
                <h1 className="text-lg font-bold">Ajouter un produit</h1>
            </div>
            <div className="px-6 py-4">
                {/* ID Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">ID</label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="id"
                        value={product.id}
                        type="number"
                        placeholder="ID"
                        onChange={(e) => setProduct({ ...product, id: e.target.value })}
                    />
                </div>

                {/* Designation Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Nom du produit</label>
                    <input
                        name="designation"
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={product.designation}
                        type="text"
                        placeholder="Nom du produit"
                        onChange={(e) => setProduct({ ...product, designation: e.target.value })}
                    />
                </div>

                {/* Prix Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Prix</label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        value={product.price}
                        placeholder="Prix"
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    />
                </div>

                {/* Quantité Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Quantité en Stock</label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        value={product.quantite}
                        placeholder="Quantité en Stock"
                        onChange={(e) => setProduct({ ...product, quantite: e.target.value })}
                    />
                </div>

                {/* Add Button */}
                <button
                    type="button"
                    onClick={addProduct}
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Ajouter le produit
                </button>
                
            </div>

            {/* Product List Table */}
            <div className="flex flex-col mt-8 mx-auto max-w-4xl">
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full border">
                                <thead className="border-b bg-gray-200">
                                    <tr>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ID</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Designation</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Prix</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Quantité</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item, index) => (
                                        <tr key={index} className="border-b cursor-pointer">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.designation}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.price}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.quantite}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => deleteProduct(item.id)}
                                                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    Supprimer le produit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => UpdateProduct(item)}
                                                    className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    Modifier le produit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
