import React, { useState, useEffect } from 'react'

import './index.css'

const CreateReport = () => {
  const [employee, setEmployee] = useState([])

  const [data, setData] = useState({
    countNumber: 1,
    employee: '',
    position: '',
    workIn: 0,
    outWork: 0,
    output: 0,
    holiday: 0,
    sick: 0
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

    await fetch('https://sleepy-island-06574.herokuapp.com/api/report/create', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        countNumber: data.countNumber,
        employee: data.countNumber,
        workIn: data.workIn,
        outWork: data.outWork,
        output: data.output,
        holiday: data.countNumber,
        sick: data.sick,
        position: data.position
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
        await fetch('https://sleepy-island-06574.herokuapp.com/api/position', { signal: signal })
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
            <label className="label">Номер</label>
            <input className="classic-inp" name="countNumber" type="num" id="countNumber" value={data.countNumber} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Лауазымы</label>
            <input className="classic-inp" name="position" type="text" id="position" value={data.position} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Қызметкер</label>
            <select className="classic-inp" name="employee" type="name" id="employee" value={data.employee} onChange={e => postHandler(e)}>
              {
                employee.map((item, id) => <option key={id} value={`${item.employee}`}>{item.employee}</option>)
              }
            </select>
          </div>

          <div className="form-group col-md-6">
            <label className="label">Ауырған күндері</label>
            <input className="classic-inp" name="sick" type="number" id="sick" value={data.sick} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Жұмыс істеген сағаты (Ай)</label>
            <input className="classic-inp" name="inWork" type="number" id="inWork" value={data.inWork} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Келмегендер күндер сағаты (Ай)</label>
            <input className="classic-inp" name="outWork" type="number" id="outWork" value={data.outWork} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Демалыс күндері</label>
            <input className="classic-inp" name="output" type="number" id="output" value={data.output} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Мереке күндері</label>
            <input className="classic-inp" name="holiday" type="number" id="holiday" value={data.holiday} onChange={e => postHandler(e)} />
          </div>
        </div>
        <div className="btn-place">
          <button className="btn-send btn" type="submit">Енгізу</button>
        </div>
      </form>
    </div>
  )
}

export default CreateReport
