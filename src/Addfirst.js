import React, { useState } from "react";
import { Table } from "antd";
// import { Switch } from "react-router-dom";
// import "../node_modules/antd/dist/antd.css";

const Addfirst = () => {
  const [aws, setAws] = useState({ firstname: "",
  fathername: "",
  surname: "",
  gender: "",
  city: "",
  hobbie: []});
  
  const [item, setItem] = useState([]);
  const [index, setIndex] = useState("");
  const [hobbie, setHobbie] = useState([]);

  const hbchange = (event) => {
    if (event.target.checked) {
      
     aws.hobbie.push(event.target.name);
      setAws({...aws});
    } else {
      aws.hobbie =aws.hobbie.filter(ele => ele !== event.target.name)

      setAws({...aws});
    }
  };

  const evchange = (event) => {
    setAws({ ...aws, [event.target.name]: event.target.value });
  };

  const saveits = () => {
   
   
    if (index === "") {
      setItem([...item, aws]);
      console.log(item,"item");
    } else {
      const data = [ ...item];
      data[index] = aws;

      setItem([...data]);
      setIndex("");
    }
    setAws({
      firstname: "",
      fathername: "",
      surname: "",
      gender: "",
      city: "",
      hobbie: [],
    });
console.log(item,"fgtdf");
   
  };

  const handleDelet = (i) => {
    item.splice(i, 1);
    setItem([...item]);
  };

  const handleEdit = (i) => {
    setIndex(i);

    setAws(item[i]);
  };

  const columns = [
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "name",
    },

    {
      title: "Fathername",
      dataIndex: "fathername",
      key: "fathername",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "city",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "hobbie",
      dataIndex: "hobbie",
      key: "hobbie",
      render: hobbie => (
        <>
          {hobbie.map(tag => {
            
            return (
              <div  key={tag}>
                {tag.toUpperCase()}
                {/* {tag.toUpperCase()} */}
              </div>
            );
          })}
        </>
      ),
    },
    {
      title: "action",
      render: (record, value, index) => {
        return (
          <>
            <button
              type="button"
              class="btn btn-warning m-1"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-warning m-1"
              onClick={() => handleDelet(index)}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="conatainer">
        <div className="col-md-6">
          <form>
            <div className="mb-2">
              <input
                type="text"
                name="firstname"
                value={aws.firstname}
                placeholder="Enter your Name"
                className=" form-control"
                onChange={evchange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="fathername"
                value={aws.fathername}
                placeholder="Enter Father Name"
                className=" form-control"
                onChange={evchange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="surname"
                value={aws.surname}
                placeholder="Enter your Surname"
                className=" form-control"
                onChange={evchange}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                id="flexRadioDefault1"
                onChange={evchange}
                checked={aws.gender === "male"}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                id="flexRadioDefault2 "
                onChange={evchange}
                checked={aws.gender == "female"}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <div className="dropdown">
              <select name="city" value={aws.city} onChange={evchange}>
                <option className="dropdown-item" value="">
                  SelectYourCity
                </option>
                <option className="dropdown-item">Surat</option>
                <option className="dropdown-item">Ahemdabad</option>
                <option className="dropdown-item">Rajkot</option>
                <option className="dropdown-item">BAroda</option>
              </select>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="cricket"
                
                  checked={(aws && aws.hobbie.length> 0 && aws.hobbie.includes("cricket")) || false}
                  onChange={hbchange}
                />
                <label className="form-check-label" for="flexCheckChecked" value="">
                  cricket
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="football"
                
                  onChange={hbchange}
                  checked={aws.hobbie.includes("football")}
                />
                <label className="form-check-label" for="flexCheckChecked">
                  football
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="chess"
                  onChange={hbchange}
                  checked={aws.hobbie.includes("chess")}
                />
                <label className="form-check-label" for="flexCheckChecked">
                  chess
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="kabaddi"
                  onChange={hbchange}
                  checked={aws.hobbie.includes("kabaddi")}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  kabaddi
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="khokho"
                  checked={aws.hobbie.includes("khokho")}
                  // value={hobbie.khokho}
                  onChange={hbchange}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  khokho
                </label>
              </div>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-warning"
            onClick={saveits}
          >
            Save it
          </button>
        </div>
      </div>

      <Table dataSource={item} columns={columns} />
    </>
  );
};

export default Addfirst;
