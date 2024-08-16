import { createSlice } from '@reduxjs/toolkit';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


function fetchFromLocalStorage() {
    let value = localStorage.getItem("value");
    if (value) {
        return JSON.parse(value);
    }
    else {
        return []; // empty array
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

            // Eklemek istediğim ürün sepette mevcut ise
            if (existingProduct) {
                existingProduct.quantity += 1; // Sepetteki adedini artır
                // console.log(existingProduct.quantity, "quantity");
            }

            state.value = [...state.value, { ...action.payload, quantity: 1 }];

            // Sepette sadece bir kere göstermek için, aynı ürünleri birleştir
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

            // Eğer bulunan indeks -1 değilse (yani ürün bulunduysa),
            // bu, ürünün dizide bulunduğu anlamına gelir.
            if (index !== -1) {
                state.value.splice(index, 1); // Sepetten bu indeksi kullanarak 1 öğeyi çıkarır.

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
                    // Ürünün adeti 1'den büyükse, adedini azalt
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
