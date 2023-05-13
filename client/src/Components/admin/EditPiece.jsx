import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editPieces, getPieces } from '../../redux/actions/pieceActions';
import Modal from "react-modal";


const EditPiece = ({piece}) => {
    const [name, setName] = useState(piece.name);
    const [reference, setReference] = useState(piece.reference);
    const [color, setColor] = useState(piece.color);
    const [cathegory, setCathegory] = useState(piece.cathegory)


    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      const editedOne = {
        _id: piece._id,
        name,
        reference,
        color,
        cathegory 
      };
      dispatch(editPieces(editedOne));
      dispatch(getPieces());
      closeModal();
    };
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
    Modal.setAppElement("#root");
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
      <div>
        <button className='button-form' onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit}>
            <input className='inputs-form'
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input className='inputs-form'
              type="text"
              placeholder="reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <input className='inputs-form'
              type="text"
              placeholder="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
           <input className='inputs-form'
              type="text"
              placeholder="cathegory"
              value={cathegory}
              onChange={(e) => setCathegory(e.target.value)}
            />

            <div>
              <button className='btn-inter-add-ok' type="submit">ok</button>
              <button className='btn-inter-add-cancel' onClick={() => closeModal()}>Cancel</button>
            </div>
          </form>
        </Modal></div>
  )
}

export default EditPiece