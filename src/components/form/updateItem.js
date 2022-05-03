import React, { useEffect, useState } from "react";
import axios from "axios";
import { fillForm, name, category, price, description, image } from "../../redux/form/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "./metodFunction"
import { useNavigate } from "react-router-dom";



 const UpdateItem = () => {
    const slug = window.location.pathname.split("/")[2];
    const myApi = "https://api-store-ed.herokuapp.com/productos"

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const nombre = useSelector(name);
    const categoria = useSelector(category);
    const precio = useSelector(price);
    const descripcion = useSelector(description);
    var imagen = useSelector(image);


    const [nameValue, setNameValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    const [descriptionValue, setDescriptionValue] = useState("");
    const [imageValue, setImageValue] = useState("");

    useEffect(() => {
        const fetchItem = async () => {
            const result = await axios.get(`${myApi}/${slug}`)
            .catch(err => console.log(err));
            dispatch(fillForm(result.data));
            console.log(result.data)
            
        }
        fetchItem();

        return () => {
            dispatch(fillForm({}));
        }

        }, []);


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
            updateProduct(slug ,productData);
            navigate("/");

        })

        
    }


    return (
        <div className="container">
            <div className="grid-update-container">
                <form onSubmit={handleSubmit} className="form-update" >
                    <h1>Update Item</h1>       
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
                            <textarea id="description" name="description" value={descriptionValue} onChange={handleChangeDescription} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="image">Imagen</label>
                        <input type="file" id="image" name="image"  onChange={handleChangeImage} />
                    </div>
                    <div className="submit">
                        <button type="submit">Agregar</button>
                    </div>
                </form>
                <div className="curretn-values">
                    <h2>Valores actuales</h2>
                    <div className="current-values__name">
                        <p>Nombre: {nombre}</p>
                    </div>
                    <div className="current-values__category">
                        <p>Categoria: {categoria}</p>
                    </div>
                    <div className="current-values__price">
                        <p>Precio: {precio}</p>
                    </div>
                    <div className="current-values__description">
                        <p>Descripcion: {descripcion}</p>
                    </div>
                    <div className="current-values__image">
                        <img src={imagen} alt="imagen" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;