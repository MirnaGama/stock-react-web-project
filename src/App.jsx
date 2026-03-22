import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/navbar/Navbar';
import SupplierPage from './features/supplier/pages/SupplierPage';


const App = () => {

  return (
    <><div className="App">    
      <Navbar/>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/suppliers" element={<SupplierPage />} />
        {/* Route for a "Not Found" page (matches any path not defined above) */}
        {/*<Route path="*" element={<NotFound />}*/}
      </Routes>
    </div>
    </>

  );
}

export default App;
