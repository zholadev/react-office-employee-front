import React, { useState, useEffect } from 'react'
import './index.css'

const CreatePosition = () => {
  const [employee, setEmployee] = useState([])

  const [data, setData] = useState({
    position: '',
    employee: '',
    discharge: 1,
    category: 1,
    salary: 1
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

    await fetch('https://sleepy-island-06574.herokuapp.com/api/position/create', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        position: data.position,
        employee: data.employee,
        discharge: data.discharge,
        category: data.category,
        salary: data.salary
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
            <label className="label">Лауазым атауы</label>
            <input className="classic-inp" name="position" type="name" id="position" value={data.position} onChange={e => postHandler(e)} />
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
            <label className="label">Категория</label>
            <input className="classic-inp" name="category" type="number" id="category" value={data.category} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Разряд</label>
            <input className="classic-inp" name="discharge" type="number" id="discharge" value={data.discharge} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Жалақы</label>
            <input className="classic-inp" name="salary" type="number" id="salary" value={data.salary} onChange={e => postHandler(e)} />
          </div>
        </div>
        <div className="btn-place">
          <button className="btn-send btn" type="submit">Енгізу</button>
        </div>
      </form>
    </div >
  )
}

export default CreatePosition
