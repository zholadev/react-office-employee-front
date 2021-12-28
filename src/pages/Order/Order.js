import React from 'react'
import OrderMiddle from '../../components/OrderMiddleTable/OrderMiddle'
import Modal from 'react-modal';
import CreateOrder from '../../components/CreateOrder/CreateOrder';

const Order = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="page-margin">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="header-title ">
          Бұйрықтар бөлімі
        </div>
        <div className="btn-place">
          <button className="btn-modal btn" onClick={openModal}>
            Бұрықты енгізу
          </button>
        </div>
      </div>

      <div className="table-content">
        <OrderMiddle />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button className="btn btn-close" onClick={closeModal} type="button">Жабу</button>
        <h3 className="mb-4">Жаңа бұйрық
          платформаға енгізу</h3>
        <CreateOrder />
      </Modal>
    </div>
  )
}

export default Order
