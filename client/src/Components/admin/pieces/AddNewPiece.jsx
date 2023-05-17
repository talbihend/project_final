import   React, { useState } from 'react'
import { useDispatch } from "react-redux";
// import { addMyNewPiece, getPieces } from '../../../redux/actions/pieceActions';
import Modal from "react-modal";
import { addMyNewPiece,getPieces } from '../../../redux/actions/pieceActions';
import "./addNewPiece.css"


const AddNewPiece = () => {
  
const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [color, setColor] = useState("");
  const [cathegory, setCathegory] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMyNewPiece( name, reference, color, cathegory));
    dispatch(getPieces());
    closeModal();
    // console.log(addMyNewPiece())
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
      <button className="btn-add-piece" onClick={openModal}>Add piece</button>
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
            <button className='btn-inter-add-ok' type="submit">Add piece</button>
            <button className='btn-inter-add-cancel' onClick={() => closeModal()}>Cancel</button>
          </div>
        </form>
      </Modal>

    
    </div>
  )
}

export default AddNewPiece