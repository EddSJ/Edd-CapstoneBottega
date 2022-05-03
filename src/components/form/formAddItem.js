import React, { useState } from "react";
import { postProduct } from "./metodFunction";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const FormAddItem = () => {
    const [nameValue, setNameValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    const [descriptionValue, setDescriptionValue] = useState("");
    const [imageValue, setImageValue] = useState("");

    const navigate = useNavigate();

    const handleChangeName = (event) => {
        setNameValue(event.target.value);
    }

    const handleChangeCategory = (event) => {
        setCategoryValue(event.target.value);
    }

    const handleChangePrice = (event) => {
        setPriceValue(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescriptionValue(event.target.value);
    }

    const handleChangeImage = (event) => {
        setImageValue(event.target.files[0]);
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", imageValue);
        formData.append("upload_preset", "xzghg8mu");



        axios.post(
            "https://api.cloudinary.com/v1_1/dr9mbvcmz/image/upload", formData
        ).then((res) => {
            console.log(res)
            const image = res.data.secure_url;
            console.log(image)
            const productData = {
                nombre: nameValue,
                categoria: categoryValue,
                precio: priceValue,
                descripcion: descriptionValue,
                imagen: image
    
            }
            postProduct(productData);
            navigate("/");
        })
    }
    
    
    /*dr9mbvcmz*/

    return (
        <div className="container">
            <form className="form-add-container" onSubmit={handleSubmit}>
                <div className="form-wrapper-add">
                    <div className="inputs">
                        <label htmlFor="name">Nombre del producto</label>
                        <input type="text" id="name" name="name" value={nameValue} onChange={handleChangeName} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="category">Categoria</label>
                        <input type="text" id="category" name="category" value={categoryValue} onChange={handleChangeCategory} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="price">Precio</label>
                        <input type="text" id="price" name="price" value={priceValue} onChange={handleChangePrice} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="description">Descripcion
                        </label>
                         <textarea  id="description" name="description" value={descriptionValue} onChange={handleChangeDescription} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="image">Imagen</label>
                        <input type="file" id="image" name="image"  onChange={handleChangeImage}  />
                    </div>
                    <div className="">
                        <button type="submit">Agregar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormAddItem;