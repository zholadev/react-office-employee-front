import React, { useState } from 'react'
import './index.css'

const CreateEmployee = () => {


  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    tel: 1,
    birth: Date(),
    IIN: 1,
    familyStatus: '',
    gender: '',
    workExperience: 1,
    educationLevel: '',
    address: ''

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

    await fetch('https://sleepy-island-06574.herokuapp.com/api/employee/create', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        tel: data.tel,
        birth: data.birth,
        IIN: data.IIN,
        familyStatus: data.familyStatus,
        gender: data.gender,
        workExperience: data.workExperience,
        educationLevel: data.educationLevel,
        address: data.address

      })
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  return (
    <div className="form py-3 px-4">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <label className="label">Аты</label>
            <input className="classic-inp" name="name" type="name" id="name" value={data.name} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Тегі</label>
            <input className="classic-inp" name="lastName" type="name" id="lastName" value={data.lastName} onChange={e => postHandler(e)} />
          </div>

          <div className="form-group col-md-6">
            <label className="label">Жұмыс тәжірибесі</label>
            <input className="classic-inp" name="workExperience" type="number" id="workExperience" value={data.workExperience} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Туған жылы</label>
            <input className="classic-inp" name="birth" type="date" id="birth" value={data.birth} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Отбасы жағдайы</label>
            <select className="classic-inp" name="familyStatus" type="text" id="familyStatus" value={data.familyStatus} onChange={e => postHandler(e)}>
              <option>Отбасы жағдайы</option>
              <option>Бойдақ. Балалар жоқ</option>
              <option>Үйленген. Бала, 15 жаста</option>
              <option>Үйленген. 12 және 16 жастағы балалар</option>
              <option>Тұрмыс құрмаған. Балалар жоқ</option>
              <option>Үйленген. Бала, 4 жаста</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="label">ИИН</label>
            <input className="classic-inp" name="IIN" type="number" id="IIN" value={data.IIN} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Білімі</label>
            <select className="classic-inp" name="educationLevel" type="text" id="educationLevel" value={data.educationLevel} onChange={e => postHandler(e)} >
              <option>Білімі</option>
              <option>орта кәсіптік білім</option>
              <option>жоғары білім - бакалавр дәрежесі</option>
              <option>жоғары білім - мамандық, магистратура</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="label">Email</label>
            <input className="classic-inp" name="email" type="email" id="email" value={data.email} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Мекен-жайы</label>
            <input className="classic-inp" name="address" type="address" id="address" value={data.address} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Ұялы телефон нөмірі</label>
            <input className="classic-inp" name="tel" type="tel" id="tel" value={data.tel} onChange={e => postHandler(e)} />
          </div>
          <div className="form-group col-md-6">
            <label className="label">Жынысы</label>
            <select className="classic-inp" name="gender" type="text" id="gender" value={data.gender} onChange={e => postHandler(e)} >
              <option>Жынысты таңданыз</option>
              <option>Еркек</option>
              <option>Әйел</option>
            </select>
          </div>
        </div>
        <div className="btn-place">
          <button className="btn-send btn" type="submit">Енгізу</button>
        </div>
      </form>
    </div>
  )
}

export default CreateEmployee;
