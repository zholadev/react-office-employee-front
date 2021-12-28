import React from 'react';
import './index.css'

const MiddleTable = () => {
  const [position, setPosition] = React.useState([])

  React.useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    const fetchData = async () => {
      try {
        await fetch('https://sleepy-island-06574.herokuapp.com/api/position', { signal: signal })
          .then((res) => res.json())
          .then((json) => setPosition(json))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
    return function cleanup() {
      abortController.abort()
    }

  }, [])

  return (
    <div className="scroll-vertical">
      {
        position.map((item, id) =>
          <div className="position-card" key={id}>
            <div className="d-flex flex-row">

              {item.discharge === 3 ? <div className="status red"></div> : item.discharge === 2 ? <div className="status blue"></div> : <div className="status green"></div>}
              {/* Status bar */}
              <table className="table w-100">
                <thead className="thead-padding">
                  <tr>
                    <th scope="col" className="thead-item py-2">Лауазым атауы</th>
                    <th scope="col" className="thead-item py-2">Жалақы</th>
                    <th scope="col" className="thead-item py-2">Категория</th>
                    <th scope="col" className="thead-item py-2">Разряд</th>
                    <th scope="col" className="thead-item py-2">Қызметкер</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-dark-text py-4">{item.position}</td>
                    <td className="td-dark-text py-4">{item.salary}</td>
                    <td className="td-dark-text py-4">{item.category}</td>
                    <td className="td-dark-text py-4">{item.discharge}</td>
                    <td className="td-dark-text py-4">{item.employee}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
    </div >
  )
}

export default MiddleTable
