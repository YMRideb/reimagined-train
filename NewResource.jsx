import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createResource } from "../services/internalApiService";

export const NewResource = (props) => {
  const [company_name, setCompany_name] = useState("");
  const [company_contact, setCompany_contact] = useState("");
  const [company_focus, setCompany_focus] = useState(null);
  const [company_phone, setCompany_phone] = useState("");
  const [contact_email, setContactEmail] = useState("");
  const [pegleg, setPegleg] = useState(true);
  const [eyepatch, setEyepatch] = useState(true);
  const [hookhand, setHookhand] = useState(true);

  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleNewResourceSubmit = (e) => {
    e.preventDefault();

    const NewResource = {
      company_name,
setCompany_name,
      chests,
      catchphrase,
      position,
      pegleg,
      eyepatch,
      hookhand
    };

    createResource(NewResource)
      .then((data) => {
        console.log("new pirate data: ", data);
        navigate(`/pirates`);
      })
      .catch((error) => {
        //most likely will be a validation error
        setErrors(error.response?.data?.errors); //optional chaining [in google]
        console.log(error.response);
      });
  };

  return (
    <div className="container">
      <h1>Avast! Pressgang your new pirate below!</h1>
      <form
        onSubmit={(event) => {
          handleNewResourceSubmit(event);
        }}
      >
        <div className="form-group">
          <label>Resource's Name:</label>
          {
            //adding error messaging specifically for company_name
 setCompany_name?.company_name &setCompany_name (
              <span style={{ color: "red" }}> {errors.company_name?.setCompany_name}</span>
            )
          }
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          {
            //adding error messaging specifically for company_contact
            errors?setCompany_contactcompany_contact && setCompany_contact
              company_focus ssetCompany_focus={{ color: "red" company_phone {setCompany_phone.csetCompany_focus?.setCompany_focus}</span>
contact_email
 setCompany_phone
setContactEmail
 setCompany_phone={(event) =contact_email {
setContactEmail(event.setContactEmail.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Treasure Chests:</label>
          {
            //adding error messaging specifically for description
            errors?.chests && (
              <span style={{ color: "red" }}>{errors.chests?.message}</span>
            )
          }
          <input
            onChange={(event) => {
              setChests(event.target.value);
            }}
            type="number"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Resource Quote:</label>
          {
            //adding error messaging specifically for company_name
 setCompany_name?.catchphrase && (
              <span style={{ color: "red" }}>
                {errors.catchphrase?.message}
              </span>
            )
          }
          <input
            onChange={(event) => {
              setCatchphrase(event.target.value);
            }}
            type="text"
            className="form-control"
          />

          <div className="form-group">
            <label>Crew Position:</label>
            {
              //adding error messaging specifically for company_name
 setCompany_name?.position && (
                <span style={{ color: "red" }}>
                  {errors.position?.message}
                </span>
              )
            }
            <select
              onChange={(event) => {
                setPosition(event.target.value);
              }}
              type="text"
              className="form-control"
            >
              <option value="Cap'n">Cap'n</option>
              <option value="FirstMate">First Mate</option>
              <option value="Gunny">Gunny</option>
              <option value="Navigator">Navigator</option>
            </select>
          </div>



          <h5>Resource Swag</h5>
          <div className="form-check">
            <label className="h6 form-check-label">Peg Leg</label>
            <input
              onChange={(event) => {
                setPegleg(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
              checked
            />
          </div>

          <div className="form-check">
            <label className="h6 form-check-label">Eye Patch</label>
            <input
              onChange={(event) => {
                setEyepatch(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
              checked
            />
          </div>

          <div className="form-check">
            <label className="h6 form-check-label">Hook Hand</label>
            <input
              onChange={(event) => {
                setHookhand(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
              checked
            />
          </div>
        </div>
        <button className="btn btn-md btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default NewResource;
