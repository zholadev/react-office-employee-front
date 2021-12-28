import React, { useState, useEffect } from 'react'
import './index.css'

const CreateOrder = () => {
  const [employee, setEmployee] = useState([])

  const [data, setData] = useState({
    countNumber: 1,
    order: '',
    employee: ''

  })


  const postHandler = (e) => {
    try {
      const newData = { ...data }
      newData[e.target.name] = e.target.value
      setData(newData)
      console.log(setData)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    console.log(data)

    await fetch('http://localhost:3535/api/order/create', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        countNumber: data.countNumber,
        order: data.order,
        employee: data.employee
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal

    const fetchData = async () => {
      try {
        await fetch('https://sleepy-island-06574.herokuapp.com/api/employee', { signal: signal })
          .then(res => res.json())
          .then(data => setEmployee(data))
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
    <div className="form py-3 px-4">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label className="label">Бұйрықтың нөмірі</label>
            <input className="classic-inp" name="countNumber" type="num" id="countNumber" value={data.countNumber} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Қызметкер</label>
            <select className="classic-inp" name="employee" type="name" id="employee" value={data.employee} onChange={e => postHandler(e)}>
              {
                employee.map((item, id) => <option key={id} value={`${item.name} ${item.lastName}`}>{item.name} {item.lastName}</option>)
              }
            </select>
          </div>

          <div className="form-group col-md-6">
            <label className="label">Бұйрық түрі</label>
            <select className="classic-inp" name="order" type="num" id="order" value={data.order} onChange={e => postHandler(e)} >
              <option>Бұйрықты таңданыз</option>
              <option value='жұмысқа орналасуы'>жұмысқа орналасуы</option>
              <option value='жұмыстан шығуы'>жұмыстан шығуы</option>
              <option value='демалысқа шығуы'>демалысқа шығуы</option>
            </select>
          </div>
        </div>
        <div className="btn-place">
          <button className="btn-send btn" type="submit">Енгізу</button>
        </div>
      </form>
    </div >
  )
}

export default CreateOrder
