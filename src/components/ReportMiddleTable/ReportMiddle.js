import React from 'react'
import './index.css'

const ReportMiddle = () => {

  const [report, setReport] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {

      try {
        await fetch('https://sleepy-island-06574.herokuapp.com/api/report')
          .then((res) => res.json())
          .then((json) => setReport(json))
          .catch((error) => console.error(error))
        console.log()
      } catch (e) {
        console.error(e.message)
      }
    }

    fetchData()

  }, [])


  return (
    <div className="scroll-vertical">
      {report.map((item, id) =>
        <div className="report-card" key={id}>
          <div className="d-flex flex-row">
            <div className="status blue"></div>
            <table className="table w-100">
              <thead className="thead-padding">
                <tr>
                  <th scope="col" className="thead-item py-2">Номер</th>
                  <th scope="col" className="thead-item py-2">Аты-жөні</th>
                  <th scope="col" className="thead-item py-2">Лауазымы</th>
                  <th scope="col" className="thead-item py-2">Жұмыс істеген
                    сағаты (Ай)</th>
                  <th scope="col" className="thead-item py-2">Келмегендер күндер
                    сағаты (Ай)</th>
                  <th scope="col" className="thead-item py-2">Демалыс
                    күндері</th>
                  <th scope="col" className="thead-item py-2">Мереке
                    күндері</th>
                  <th scope="col" className="thead-item py-2">Ауырған күндері</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-dark-text py-4">{item.countNumber}</td>
                  <td className="td-dark-text py-4">{item.employee}</td>
                  <td className="td-dark-text py-4">{item.position}</td>
                  <td className="td-dark-text py-4">{item.workIn}</td>
                  <td className="td-dark-text py-4">{item.outWork}</td>
                  <td className="td-dark-text py-4">{item.output}</td>
                  <td className="td-dark-text py-4">{item.holiday}</td>
                  <td className="td-dark-text py-4">{item.sick}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      )}
    </div >
  )
}

export default ReportMiddle
