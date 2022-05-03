import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalContent: {}
};

const modalContentSlice = createSlice({
    name: "modalContent",
    initialState,
    reducers: {
        fillModal: (state, { payload }) => {
            state.modalContent = payload;
        },
        clearModal: state => {
            state.modalContent = {};
        }
    }
});

export const { fillModal, clearModal } = modalContentSlice.actions;
export const currentModalContent = (state) => state.modalContent.modalContent;
export default modalContentSlice.reducer;