import ReactModal from 'react-modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "../../redux/modal/modalSlice";
import { stateOfModal } from '../../redux/modal/modalSlice';
import { clearModal, currentModalContent } from '../../redux/modal/modalContentSlice';


const ItemDetailModal = (props) => {

    const dispatch = useDispatch();

    const sModal = useSelector(stateOfModal);


    const customeStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%",
            width: "600px",
            height: "600px",
        },
        overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.75)" 
        }
    }
    

    const stopModal = () => {
        dispatch(closeModal());
        dispatch(clearModal());
    };

    const modalData = useSelector(currentModalContent);
    const { nombre, descripcion, imagen } = modalData;

    return (
        <ReactModal
            isOpen={sModal}
            onRequestClose={stopModal}
            style={customeStyles}
            ariaHideApp={false}
        >
            <div className='modal-content-wrapper'>
                <h3>{nombre}</h3>
                <div className='img-modal'>
                    <img src={imagen} alt={nombre} />
                </div>
                <h3>Description</h3>
                <h4>
                    {descripcion}
                </h4>
            </div>
        </ReactModal>
    )
};

export default ItemDetailModal;