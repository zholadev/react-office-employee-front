import React, { useState, useEffect } from 'react';
import './index.css'

const OrderMiddle = () => {

  const [order, setOrder] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch('https://sleepy-island-06574.herokuapp.com/api/order')
          .then((res) => res.json())
          .then((json) => setOrder(json))
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="scroll-vertical">
      {
        order.map((item, id) =>
          <div className="position-card" key={id}>
            <div className="d-flex flex-row">
              {item.order === 'жұмыстан шығуы' ? <div className="status red"></div> : item.order === 'демалысқа шығуы' ? <div className="status green"></div> : <div className="status blue"></div>}
              <table className="table w-100">
                <thead className="thead-padding">
                  <tr>
                    <th scope="col" className="thead-item py-2">Бұйрықтың нөмірі</th>
                    <th scope="col" className="thead-item py-2">Қызметкер</th>
                    <th scope="col" className="thead-item py-2">Бұйрық түрі</th>
                    <th scope="col" className="thead-item py-2">Қойылған күн</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-dark-text py-4">{item.countNumber}</td>
                    <td className="td-dark-text py-4">{item.employee}</td>
                    <td className="td-dark-text py-4">{item.order}</td>
                    <td className="td-dark-text py-4">{item.createdAt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
    </div >
  )
}

export default OrderMiddle
