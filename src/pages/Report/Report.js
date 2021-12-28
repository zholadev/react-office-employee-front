import React from 'react'
import ReportMiddle from '../../components/ReportMiddleTable/ReportMiddle.js'
import Modal from 'react-modal';
import CreateReport from '../../components/CreateReport/CreateReport.js';

import './index.css'

const Report = () => {


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const time = new Date()
  const months = ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Казан", "Қараша", "Желтоқсан"];
  const month = months[time.getMonth()]

  return (
    <div className="page-margin">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="btn-place">
          <button className="btn-modal btn" onClick={openModal}>
            Табельді  қосу
          </button>
        </div>
        <div className="header-subtitle d-flex flex-row align-items-center">
          <span className="month-subtitle mr-2">Табель (айы): </span>
          <span className="month">{month}</span>
        </div>
      </div>

      <div className="table-content">
        <ReportMiddle />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button className="btn btn-close" onClick={closeModal} type="button">Жабу</button>
        <h3 className="mb-4">Жаңа Табельді
          платформаға енгізу</h3>
        <CreateReport />
      </Modal>
    </div>
  )
}

export default Report
