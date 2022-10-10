import { Link, Navigate, Route, Routes } from "react-router-dom";

import Resources from "./views/allResources";
import Resource from "./views/OneResource";
// import { NewResource } from "./views/NewResource";
// import { NotFound } from "./views/notFound";

function App() {
  return (

//     <nav class="navbar navbar-inverse">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>                        
//       </button>
//       <a class="navbar-brand" href="#">Logo</a>
//     </div>
//     <div class="collapse navbar-collapse" id="myNavbar">
//       <ul class="nav navbar-nav">
//         <li class="active"><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Projects</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//       <ul class="nav navbar-nav navbar-right">
//         <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>


    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4"> */}
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1 className="navbar-title mb-0">Prison Scholar Fund</h1>
            <h2 className="navbar-tagline">1FD Division</h2>
            <p>Potential Employment Opportunities</p>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <Link
              to="/resources/new"
              className="btn btn-sm btn-outline-info mx-1"
            >
              Add a new entry!
            </Link>
            <Link
              to="/resources"
              className="btn btn-sm btn-outline-primary mx-1"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/*Front-end routes to display view components
      these are separate from our server routes */}
      <Routes>
        {/*Redirect example*/}
        <Route path="/" element={<Navigate to="/resources" />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<Resource />} />
        {/* <Route path="/resources/new" element={<NewResource />} />
        <Route path="*" element={<NotFound />} /> */}
        {
          /*you still need another route to update your resource */
          //<Route path="/resources/:id/update" element={<UpdateResource/>}
        }
      </Routes>
    </div>
  );
}

export default App;
