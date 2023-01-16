import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { Form, Button } from "react-bootstrap";

const AddEmployeeComponent = () => {
  const [socialSecurity, setSocialSecurity] = useState("");
  const [address, setAddress] = useState("");
  const [alienauthorizationnumber, setAlienauthorizationnumber] = useState("");
  const [aptnumber, setAptnumber] = useState("");

  const [citizenshipstatus, setCitizenshipstatus] = useState("");
  const [noncitizennational, setnoncitizennational] = useState("");
  const [lawfulpermanentresident, setlawfulpermanentresident] = useState("");
  const [authorizedalien, setauthorizedalien] = useState("");

  const [formadmissionnumber, setformadmissionnumber] = useState("");
  const [foreignpassportnumber, setforeignpassportnumber] = useState("");
  const [countryofissuance, setcountryofissuance] = useState("");
  const [expirationdate, setexpirationdate] = useState("");
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
      noncitizennational,
      lawfulpermanentresident,
      authorizedalien,
      formadmissionnumber,
      foreignpassportnumber,
      countryofissuance,
      expirationdate,
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
        setnoncitizennational(response.data.noncitizennational);
        setlawfulpermanentresident(response.data.lawfulpermanentresident);
        setauthorizedalien(response.data.authorizedalien);

        setformadmissionnumber(response.data.formadmissionnumber);
        setforeignpassportnumber(response.data.foreignpassportnumber);
        setcountryofissuance(response.data.countryofissuance);
        setexpirationdate(response.data.expirationdate);
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
      return <h2 className="text-center">I-9 Section 1</h2>;
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
                  <label className="form-label">
                    {" "}
                    Last Name (Family Name):
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    className="form-control"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    First Name (Given Name):
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    className="form-control"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Middle Initial:</label>
                  <input
                    type="text"
                    placeholder="Enter Middle Initial"
                    name="middleinitial"
                    className="form-control"
                    value={middleinitial}
                    required
                    onChange={(e) => setMiddleinitial(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    Other Last Name (if any):
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Other Last Name"
                    name="otherlastname"
                    className="form-control"
                    value={otherlastname}
                    required
                    onChange={(e) => setOtherlastname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    Address (Street Number and Name):
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    className="form-control"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Apartment Number:</label>
                  <input
                    type="text"
                    placeholder="Enter Apartment Number"
                    name="aptnumber"
                    className="form-control"
                    required
                    value={aptnumber}
                    onChange={(e) => setAptnumber(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">City or Town:</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    name="city"
                    className="form-control"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> State:</label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    name="state"
                    className="form-control"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> ZIP Code:</label>
                  <input
                    type="text"
                    placeholder="Enter Zip Code"
                    name="zipcode"
                    className="form-control"
                    required
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    Date of Birth (mm/dd/yyyy):
                  </label>
                  <input
                    type="date"
                    placeholder="Enter Date of Birth"
                    name="dateofbirth"
                    className="form-control"
                    required
                    value={dateofbirth}
                    onChange={(e) => setDateofbirth(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Social Security:</label>
                  <input
                    type="text"
                    placeholder="Enter Social Security Number"
                    name="SocialSecurity"
                    className="form-control"
                    required
                    value={socialSecurity}
                    onChange={(e) => setSocialSecurity(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    Employee's Email Address:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email address"
                    name="employee_email"
                    className="form-control"
                    required
                    value={employee_email}
                    onChange={(e) => setEmployee_email(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    Employee's Telephone Number :
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Telephone number"
                    name="telephone"
                    className="form-control"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  ></input>
                </div>
                <div class="radio">
                  <label class="form-label">Citizenship Status:</label>
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        name="citizenshipstatus"
                        value={citizenshipstatus}
                         className="form-control"
                        onChange={(e) => setCitizenshipstatus(e.target.value)}
                      ></input>
                      A citizen of the United States
                    </label>
                     <label>
                      <input type="radio" name="noncitizennational"></input>A
                      noncitizen national of the United States (see
                      instructions)
                    </label>
                     <label>
                      <input
                        type="radio"
                        name="lawfulpermanentresident"
                      ></input>
                      A lawful permanent resident (Alien Registration
                      Number/USCIS Number)
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
                    </label>
                  
                  
                    <label>
                      <input type="radio" name="authorizedalien"></input>An
                      alien authorized to work until (expiration date, if
                      applicable, mm/dd/yyyy){" "}
                      <input
                        type="date"
                        name="expirationdate"
                        className="form-control"
                        required
                        value={expirationdate}
                        onChange={(e) => setexpirationdate(e.target.value)}
                      ></input>
                    </label>
                  </div>
                  <label for="citizenshipstatus"></label>
                </div>
                <div className="form-group mb-2">
                  <h5>
                    Aliens authorized to work must provide only one of the
                    following document numbers to complete Form I-9: An Alien
                    Registration Number/USCIS Number OR Form I-94 Admission
                    Number OR Foreign Passport Number.
                  </h5>
                  <ol>
                    <li>
                      <input
                        type="text"
                        placeholder="Enter Alien Registration Number"
                        name="alienauthorizationnumber"
                        className="form-control"
                        required
                        value={alienauthorizationnumber}
                        onChange={(e) =>
                          setAlienauthorizationnumber(e.target.value)
                        }
                      ></input>
                    </li>
                    <h6>OR</h6>
                    <li>
                      <input
                        type="text"
                        placeholder="Enter Form I-94 Admission Number"
                        name="formadmissionnumber"
                        className="form-control"
                        value={formadmissionnumber}
                        onChange={(e) => setformadmissionnumber(e.target.value)}
                      ></input>
                    </li>
                    <h6>OR</h6>
                    <li>
                      <input
                        type="text"
                        placeholder="Enter Foreign Passport Number"
                        name="foreignpassportnumber"
                        className="form-control"
                        value={foreignpassportnumber}
                        onChange={(e) =>
                          setforeignpassportnumber(e.target.value)
                        }
                      ></input>
                      <input
                        type="text"
                        placeholder="Enter Country of Issuance"
                        name="countryofissuance"
                        className="form-control"
                        value={countryofissuance}
                        onChange={(e) => setcountryofissuance(e.target.value)}
                      ></input>
                    </li>
                  </ol>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Employee Signature :</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Signature"
                    name="employeesignature"
                    className="form-control"
                    required
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
                    required
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
