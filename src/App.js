
import './App.css';
import { useState } from 'react';
import { Table } from './table'


const Data = () => {

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    gender: "",
    age: "",
  })

  const [isEdit, setIsedit] = useState(-1);
  // 1
  const [records, setRecords] = useState(JSON.parse(localStorage.getItem("localdata")) || []);

  const handleChange = (j) => {

    setInputData({ ...inputdata, [j.target.name]: j.target.value })

  }
  const handleClick = () => {
    setRecords([...records, inputdata])

    if (isEdit !== -1) {
      const updated = records?.map((item, index) => {
        if (index === isEdit) { return inputdata }
        else return item
      });
      setRecords(updated);
      localStorage.setItem("localdata", JSON.stringify(updated))

    }
    else {
      setRecords([...records, inputdata])
      // 0
      localStorage.setItem("localdata", JSON.stringify([...records, inputdata]))
      console.log(records);
    }

  }
  const handleDelete = (hii) => {
    const hello = records?.filter((item, index) => { return index !== hii })
    setRecords(hello);
    // 3n
    localStorage.setItem("localdata", JSON.stringify(hello))
  }


  console.log(inputdata)
  console.log(records)


  return (
    <div>
      <h1>Test</h1>
      <div style={{ color: "blue", }}>
        <label htmlFor='Name'>NAME:</label>
        <input type='text' id='Name' name='fname' value={inputdata.fname} onChange={(j) => handleChange(j)} />
      </div>
      <div>
        <label htmlFor='Lastname'>LASTNAME:</label>
        <input type='text' id='Lastname' name='lname' value={inputdata.lname} onChange={(j) => handleChange(j)} style={{ width: "200px", }} />
      </div>
      <div>
        <label htmlFor='Gender'>GENDER:</label>
        <input type='radio' id='Male' name='gender' onChange={(j) => handleChange(j)} value="male" />Male
        <input type='radio' id='Female' name='gender' onChange={(j) => handleChange(j)} value="female" />Female
      </div>
      <div>
        <label htmlFor='Number'>age:</label>
        <input type='tel' id='Number' name='age' value={inputdata.age} onChange={(j) => handleChange(j)} />
      </div>
      <button onClick={() => handleClick()}>Click</button>

      <Table data={records} handleDelete={handleDelete} handleEdit={(indexx, record) => { setIsedit(indexx); setInputData(record) }} />

    </div>
  );
}

export default Data;
