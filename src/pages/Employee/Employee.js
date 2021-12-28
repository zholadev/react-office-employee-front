import React from 'react';
import './index.css';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import Modal from 'react-modal';
import CreateEmployee from '../../components/CreateEmployee.js/CreateEmployee';

const Employee = () => {
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
        <div className="header-title">
          Қызметкерлер бөлімі
        </div>
        <div className="btn-place">
          <button className="btn-modal btn" onClick={openModal}>
            Қызметкерді  қосу
          </button>
        </div>
      </div>

      <div className="d-flex flex-row">
        <div className="user-content">
          <EmployeeCard />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button className="btn btn-close" onClick={closeModal} type="button">Жабу</button>
        <h3 className="mb-4">Жаңа қызметкерді
          платформаға қосу</h3>
        <CreateEmployee />
      </Modal>
    </div>
  )
}

export default Employee
