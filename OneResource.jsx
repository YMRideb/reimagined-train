import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getResourceById } from "../services/internalApiService";

export const OneResource = (props) => {
  const { id } = useParams();
  const [Resource, setResource] = useState(null);

  useEffect(() => {
    getResourceById(id)
      .then((data) => {
        setResource(data);
      })
      .catch(console.log(Error));
  }, [id]);

  if (Resource === null) {
    return <h3 className="text-danger">..No idea what you're talking about || Error 404: Page not found</h3>;
  }

  //we can safely use the data to render and destructure now
  //since we checked if the data is null
  const { 
    company_name, 
    company_contact, 
    company_focus, 
    company_phone, 
    contact_email,
    contact_linkedin, 
  } = Resource;

  return (
    <>
      <div className="container">
        <h6>JSON id: {id}</h6>
        <div className="card">
          <div className="card mx-5">
            <h2>
              This is the resource contacted:
              <br />
              {company_name}
            </h2>
            <p>
              This is the person contacted at the company:
              <br />
              {company_contact}
            </p>
          </div>
          <h2>
            This is the focus, or tagline of the company:
            <br />
            {company_focus}
          </h2>
          <p>
            Phone Number:
            <br />
            {company_phone}
          </p>
          <p>
            Contact at the company:
            <br />
            {contact_email}
            <br />
            {contact_linkedin}
          </p>
          
        </div>
      </div>
    </>
  );
};
export default OneResource;
