import { createSlice } from '@reduxjs/toolkit';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


function fetchFromLocalStorage() {
    let value = localStorage.getItem("value");
    if (value) {
        return JSON.parse(value);
    }
    else {
        return [];
    }
}

function storeInLocalStorage(data) {
    localStorage.setItem("value", JSON.stringify(data));
}

const initialState = {
    value: fetchFromLocalStorage(),
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingProduct = state.value.find(eachProduct => eachProduct.id_product === action.payload.id_product);

 
            if (existingProduct) {
                existingProduct.quantity += 1; 

            }

            state.value = [...state.value, { ...action.payload, quantity: 1 }];


            const uniqueProducts = state.value.filter((product, index, self) =>
                index === self.findIndex(p => p.id_product === product.id_product)
            );

            state.value = uniqueProducts;
            storeInLocalStorage(state.value);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "add product success",
                showConfirmButton: false,
                timer: 1500,
              });
        },

        remove: (state, action) => {
            const index = state.value.findIndex(product => product.id_product === action.payload);


            if (index !== -1) {
                state.value.splice(index, 1); 

                storeInLocalStorage(state.value);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "remove product success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                
            }
        },

        removeOne: (state, action) => {
            const index = state.value.findIndex(product => product.id_product === action.payload);

            if (index !== -1) {
                if (state.value[index].quantity > 1) {

                    state.value[index].quantity -= 1;

                    storeInLocalStorage(state.value);
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "remove product success",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            }
        },
        
    },
});

export const { add, remove, removeOne } = navbarSlice.actions;

export default navbarSlice.reducer;
