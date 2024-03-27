import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editProId, setEditProId] = useState(null);
  const { expenses, money, products } = useSelector((s) => s);
  console.log(products);
  const dispatch = useDispatch();
  function getProduct() {
    if (name.trim() === "" || price.trim() === "") {
      alert(" You must write Sm!");
    } else {
      const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price,
      };
      dispatch({ type: "ToDo", payload: newProduct });
      setName("");
      setPrice("");
    }
  }
  const del = (data) => {
    dispatch({ type: "DELETE_PRODUCT", payload: data.id });
  };
  const addEdit = (data) => {
    setName(data.name);
    setPrice(data.price);
    setEditProId(data.id);  
      dispatch({ type: "EDIT_PRO", payload: price });
  };
  const editProduct = () => {
    let obj = {
      id: editProId,
      name,
      price,
    };
    dispatch({ type: "EDIT_PRODUCT", payload: obj });


  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="hero">
          <div className="expenses">
            <h1
              style={{
                color: "purple",
              }}
            >
              Expenses:
            </h1>
            <h1>{expenses}$</h1>
          </div>
          <div className="money">
            <h1
              style={{
                color: "purple",
              }}
            >
              Balance
            </h1>
            <h1>{money}$</h1>
          </div>
        </div>
        <div className=" mt-20 w-[40%] mx-auto items-center justify-center flex-col gap-6 ">
          <div class="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group ">
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Price
            </label>
          </div>
          <button
            onClick={editProId ? () => editProduct() : () => getProduct()}
            type="button"
            class="text-gray-900 ml-36 flex items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {
              editProId ? "Edit Product" : "Add Product"
            }
            Bay Product
          </button>
        </div>
        <div class="relative overflow-x-auto ml-24 ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((el) => (
                <tr class="bg-white border-b  dark:bg-gray-800  dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {el.name}
                  </th>
                  <td class="px-6 py-4">{el.price}$</td>
                  <button
                    onClick={() => addEdit(el)}
                    type="button"
                    class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => del(el)}
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-red-200 via-red-400 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
