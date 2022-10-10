import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAllResources,
  deleteResourceById,
  updateResourceById,
} from "../services/internalApiService";

const AllResources = (props) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getAllResources()
      .then((data) => {
        setResources(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteResourceById = (idOfResourceToDelete) => {
    deleteResourceById(idOfResourceToDelete)
      .then((data) => {
        /*
      since this page displays all the destinations, the deleted one will still be displayed unless we remove it from state
      but we should only remove it when the delete is successful which happens inside `.then` clause
       */
        const filteredListOfResources = resources.filter((resource) => {
          return resource._id !== idOfResourceToDelete;
        });
        setResources(filteredListOfResources);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>

      {resources.map((resource) => {
        const { 
        _id, 
        name, 
        src,
        pegleg,
        eyepatch,
        hookhand } = resource;

        return (
          <div
            key={_id}
            className="container card-body shadow mb-3 rounded border p-5"
          >
            {/* <Link to={`/resources/${_id}`}>{name}</Link> */}
            <h3>
              Name of Resource:
              <br />
              {name}
            </h3>
            <p>
              Img URL:
              <br />{src}
            </p>

            <ol className="list-group">
              {/* display only the `true` seasons. */}
              {pegleg && <li className="list-group-item">PegLeg</li>}
              {eyepatch && <li className="list-group-item">Eye Patch</li>}
              {hookhand && <li className="list-group-item">Hook Hand</li>}
            </ol>
            <Link
              to={`/resources/${_id}`}
              className="btn btn-sm btn-outline-danger"
            >
              View Resource
            </Link>
            <button
              onClick={(e) => handleDeleteResourceById(_id)}
              className="btn btn-outline-danger btn-sm"
            >
              Walk The Plank!
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllResources;
