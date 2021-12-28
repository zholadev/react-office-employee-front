import React from 'react';
import './index.css';
import Logo from '../../assets/logo.svg'
import LogoText from '../../assets/logo-text.svg'
import EmployeeIcon from '../../assets/employee-icon.svg';
import PositionIcon from '../../assets/position-icon.svg';
import OrderIcon from '../../assets/order-icon.svg';
import ReportIcon from '../../assets/report-icon.svg';
import { Link } from 'react-router-dom';
import { EMPLOYEE, ORDER, POSITION, REPORT } from '../../utils/routes';

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo-place ">
        <Link to={EMPLOYEE} className="d-flex justify-content-center align-items-center">
          <img src={Logo} className="img-fluid mr-3" alt="" />
          <img src={LogoText} className="img-fluid" alt="" />
        </Link>
      </div>

      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link to={EMPLOYEE} className="d-flex flex-row align-items-center">
              <img src={EmployeeIcon} className="img-fluid" alt="employee" />
              <span className="nav-link">Қызметкерлер</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={POSITION} className="d-flex flex-row align-items-center">
              <img src={PositionIcon} className="img-fluid" alt="employee" />
              <span className="nav-link">Лауазымдар</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={ORDER} className="d-flex flex-row align-items-center">
              <img src={OrderIcon} className="img-fluid" alt="employee" />
              <span className="nav-link">Бұйрықтар</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={REPORT} className="d-flex flex-row align-items-center">
              <img src={ReportIcon} className="img-fluid" alt="employee" />
              <span className="nav-link">Табель</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="d-flex justify-content-center align-items-end">
        <div className="platform-index text-center d-flex justify-content-center align-items-center flex-column">
          <div className="mb-2">
            Қызметшілер CMS
          </div>
          <div>
            Платформасы
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
