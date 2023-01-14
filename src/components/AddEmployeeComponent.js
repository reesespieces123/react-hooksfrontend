import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployeeComponent = () => {
  const [socialSecurity, setSocialSecurity] = useState("");
  const [address, setAddress] = useState("");
  const [alienauthorizationnumber, setAlienauthorizationnumber] = useState("");
  const [aptnumber, setAptnumber] = useState("");
  const [citizenshipstatus, setCitizenshipstatus] = useState("");
  const [city, setCity] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [employee_email, setEmployee_email] = useState("");
  const [employeesignature, setEmployeesignature] = useState("");
  const [employeesignaturedate, setEmployeesignaturedate] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middleinitial, setMiddleinitial] = useState("");
  const [otherlastname, setOtherlastname] = useState("");
  const [state, setState] = useState("");
  const [telephone, setTelephone] = useState("");
  const [zipcode, setZipcode] = useState("");

  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = {
      socialSecurity,
      address,
      alienauthorizationnumber,
      aptnumber,
      citizenshipstatus,
      city,
      dateofbirth,
      employee_email,
      employeesignature,
      employeesignaturedate,
      firstname,
      lastname,
      middleinitial,
      otherlastname,
      state,
      telephone,
      zipcode,
    };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          history.push("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);

          history.push("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setSocialSecurity(response.data.socialSecurity);
        setAddress(response.data.address);
        setAlienauthorizationnumber(response.data.alienauthorizationnumber);
        setAptnumber(response.data.aptnumber);
        setCitizenshipstatus(response.data.citizenshipstatus);
        setCity(response.data.city);
        setDateofbirth(response.data.dateofbirth);
        setEmployee_email(response.data.employee_email);
        setEmployeesignature(response.data.employeesignature);
        setEmployeesignaturedate(response.data.employeesignaturedate);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setMiddleinitial(response.data.middleinitial);
        setOtherlastname(response.data.otherlastname);
        setState(response.data.state);
        setTelephone(response.data.telephone);
        setZipcode(response.data.zipcode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Social Security :</label>
                  <input
                    type="text"
                    placeholder="Enter Social Security Number"
                    name="SocialSecurity"
                    className="form-control"
                    value={socialSecurity}
                    onChange={(e) => setSocialSecurity(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Address :</label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">
                    Alien Authorization Number :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Alien Authorization Number"
                    name="alienauthorizationnumber"
                    className="form-control"
                    value={alienauthorizationnumber}
                    onChange={(e) =>
                      setAlienauthorizationnumber(e.target.value)
                    }
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Apartment Number :</label>
                  <input
                    type="text"
                    placeholder="Enter Apartment Number"
                    name="aptnumber"
                    className="form-control"
                    value={aptnumber}
                    onChange={(e) => setAptnumber(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Citizenship Status:</label>
                  <input
                    type="text"
                    placeholder="Enter Citizenship Status"
                    name="citizenshipstatus"
                    className="form-control"
                    value={citizenshipstatus}
                    onChange={(e) => setCitizenshipstatus(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">City :</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    name="city"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Date of Birth :</label>
                  <input
                    type="text"
                    placeholder="Enter Date of Birth"
                    name="dateofbirth"
                    className="form-control"
                    value={dateofbirth}
                    onChange={(e) => setDateofbirth(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Email :</label>
                  <input
                    type="text"
                    placeholder="Enter Email address"
                    name="employee_email"
                    className="form-control"
                    value={employee_email}
                    onChange={(e) => setEmployee_email(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Employee Signature :</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Signature"
                    name="employeesignature"
                    className="form-control"
                    value={employeesignature}
                    onChange={(e) => setEmployeesignature(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Signature Date :</label>
                  <input
                    type="text"
                    placeholder="Enter Date Signed"
                    name="employeesignaturedate"
                    className="form-control"
                    value={employeesignaturedate}
                    onChange={(e) => setEmployeesignaturedate(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Middle Initial :</label>
                  <input
                    type="text"
                    placeholder="Enter Middle Initial"
                    name="middleinitial"
                    className="form-control"
                    value={middleinitial}
                    onChange={(e) => setMiddleinitial(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Other Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Other Last Name"
                    name="otherlastname"
                    className="form-control"
                    value={otherlastname}
                    onChange={(e) => setOtherlastname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> State :</label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    name="state"
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Telephone Number :</label>
                  <input
                    type="text"
                    placeholder="Enter Telephone Number"
                    name="telephone"
                    className="form-control"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Zip Code :</label>
                  <input
                    type="text"
                    placeholder="Enter Zip Code"
                    name="zipcode"
                    className="form-control"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/employees" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
