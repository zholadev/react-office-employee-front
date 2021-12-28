import React, { useEffect, useState } from 'react'
import './index.css';
import Email from '../../assets/email-icon.svg'
import Location from '../../assets/location-icon.svg'
import Tel from '../../assets/tel-icon.svg'

const EmployeeCard = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch('https://sleepy-island-06574.herokuapp.com/api/employee')
          .then((res) => res.json())
          .then((json) => setUser(json))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])


  return (
    <div className="scroll-vertical">
      {user.map((item, id) =>
        <div className="user-card" key={id}>
          <div className="d-flex">
            <div className="user-base px-3 py-2">
              <div className="list">
                <div className="d-flex justify-content-center">
                  <div className="name mb-2">
                    {item.name} {item.lastName}
                  </div>
                </div>
                <ul>
                  <li className="d-flex flex-row align-items-center list-item">
                    <img src={Email} className="img-fluid mr-2" alt="" />
                    <span className="text">{item.email}</span>
                  </li>
                  <li className="d-flex flex-row align-items-center list-item">
                    <img src={Tel} className="img-fluid mr-2" alt="" />
                    <span className="text">{item.tel}</span>
                  </li>
                  <li className="d-flex flex-row align-items-center list-item">
                    <img src={Location} className="img-fluid mr-2" alt="" />
                    <span className="text">{item.address}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="user-info py-2 px-3">
              <div className="top">
                <table className="table">
                  <thead className="head-table">
                    <tr>
                      <th scope="col" className="thead-text py-1">Жынысы:</th>
                      <th scope="col" className="thead-text py-1">Туылған күні:</th>
                      <th scope="col" className="thead-text py-1">Білім деңгейі:</th>
                      <th scope="col" className="thead-text py-1">Отбасы жағдайы:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td-dark-text py-1">{item.gender}</td>
                      <td className="td-dark-text py-1">{item.birth} жыл</td>
                      <td className="td-dark-text py-1">{item.educationLevel}</td>
                      <td className="td-dark-text py-1">{item.familyStatus}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bottom d-flex flex-row align-items-center justify-content-between">
                <div className="table-place">
                  <table className="table">
                    <thead className="head-table">
                      <tr>
                        <th scope="col" className="thead-text py-1">Жұмыс тәжірибесі:</th>
                        <th scope="col" className="thead-text py-1">ИИН:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="td-dark-text py-1">{item.workExperience}</td>
                        <td className="td-dark-text py-1">{item.IIN}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*  <div className="btn-place d-flex flex-row align-items-center">
                <button className="delete btn">Тізімнен жою</button>
                <button className="edit btn">Өзгерту</button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmployeeCard
