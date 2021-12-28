import React from 'react';
import './index.css'
import MiddleTable from '../../components/MiddleTableCard/MiddleTable';
import Modal from 'react-modal';
import CreatePosition from '../../components/CreatePostiton/CreatePosition';

const Position = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="page-margin ">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="header-title">
          Лауазым бөлімі
        </div>
        <div className="btn-place">
          <button className="btn-modal btn" onClick={openModal}>
            Лауазымды енгізу
          </button>
        </div>
      </div>

      <div className="table-content">
        <MiddleTable />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button className="btn btn-close" onClick={closeModal} type="button">Жабу</button>
        <h3 className="mb-4">Жаңа лауазымды
          платформаға енгізу</h3>
        <CreatePosition />
      </Modal>
    </div>
  )
}

export default Position
