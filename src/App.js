import { Container } from "react-bootstrap";
import EmployeeList from "./Components/EmployeeList";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./Components/CreateEmployee";
import Employee from "./Components/Employee";

const App = () => {
  return (
    <div className="App">
     <Header />

     <div className='emp-container'>
      <Routes>
      <Route  path="/" element={<Employee />} />
      <Route  path="employees" element={<EmployeeList />} />
      <Route path="register-employee" element={<CreateEmployee />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
