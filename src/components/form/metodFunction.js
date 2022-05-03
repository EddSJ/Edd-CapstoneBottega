import axios from 'axios';

const myApi = "https://api-store-ed.herokuapp.com/productos"

export async function postProduct (productData) {
    try {
        console.log(productData);


        const response = await axios ({
            method: 'POST',
            url: `${myApi}`,
            data: productData
            
        })
        console.log(response);
        return response
    } 
    catch (error) {
        console.log(error)
    }
}

export async function deleteProduct (id) {
    try {
        console.log(id);


        const response = await axios ({
            method: 'DELETE',
            url: `${myApi}/${id}`
            
        })
        console.log(response);
        /*refresh the page*/
        window.location.reload();
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export async function updateProduct (id, productData) {
    try {
        console.log(id);
        console.log(productData);


        const response = await axios ({
            method: 'PUT',
            url: `${myApi}/${id}`,
            data: productData
            
        })
        console.log(response);
        return response
    }
    catch (error) {
        console.log(error)
    }
}

export async function getProduct (id) {
    try {
        console.log(id);


        const response = await axios ({
            method: 'GET',
            url: `${myApi}/${id}`
        }
        )
        console.log(response);
        return response
    }
    catch (error) {
        console.log(error)
    }
}
