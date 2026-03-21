import { Route, Routes } from 'react-router-dom';
import './App.css';
import SupplierList from './features/SupplierPage/SupplierList';
import Navbar from './layouts/navbar/Navbar';


const App = () => {

  return (
    <><div className="App">    
      <Navbar/>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/suppliers" element={<SupplierList />} />
        {/* Route for a "Not Found" page (matches any path not defined above) */}
        {/*<Route path="*" element={<NotFound />}*/}
      </Routes>
    </div>
    </>

  );
}

export default App;
