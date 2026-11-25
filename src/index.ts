import axios from "axios"
import { productsApi } from "./api/products.api"

/*
async function request(){
    const response = await axios.get("http://localhost:3001/products")
    console.log(response.data)
}
*/

async function getProducts(){
    const response = await productsApi.get("/products") //Requisição do tipo GET
    console.log(response.data)
}

//getProducts()

async function createProduct() {
    
    const body = {
        name: "Notebook",
        description: "Macbook air, M1 2020",    
        price: 3700
        
    }

    const response = await productsApi.post("/products", body)      //Requisição do tipo POST
    console.log(response)
}
//createProduct()

async function searchProducts(){
    const response = await productsApi.get("/products", {

        params: {
            search: "note"                          //Buscar itens
        }

    }) //Requisição do tipo GET
    console.log(response.data)
}
//searchProducts()

async function getOneProduct() {
    
    const response = await productsApi.get("/products/2")   // -> /2 fará buscar o produto de ID 2
    console.log(response.data)
}
getOneProduct()