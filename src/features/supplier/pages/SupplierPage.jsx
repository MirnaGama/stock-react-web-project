import { useEffect, useState } from "react";
import PersonEntityForm from "../../../components/person-entity-form/PersonEntityForm";
import PersonEntityList from "../../../components/person-entity-list/PersonEntityList";
import { sendErrorToast, sendSuccessToast } from "../../../util/Toast";
import SupplierService from "../services/SupplierService";

const SupplierPage = () => {

  const createNewSupplier = (supplier) => {
      SupplierService.createSupplier(supplier).then(() => {
        sendSuccessToast("Supplier created successfully!");
        setSuppliers([...suppliers, supplier])
      })
      .catch((err) => {
        sendErrorToast("An unexpected error occured! ", err);
      });
  };

  const [suppliers, setSuppliers] = useState([]);
  const [newSupplierRender, setNewSupplierRender] = useState([false]);

  useEffect(() => {
    getSuppliers();
  }, []);

  const getSuppliers = () => {
    SupplierService.getSuppliers()
    .then((response) => {
      setSuppliers(response.data);
    })
    .catch((err) => {
      sendErrorToast("Network error. Try again later")
    });
  }
 
  const handleClickNewSupplier = () => { // Define the event handler function
    setNewSupplierRender(newSupplierRender == true ? false : true);
  };

  return (
      <>
      
      <PersonEntityList personEntities={suppliers}/>

      <button onClick={handleClickNewSupplier}> 
      {!newSupplierRender ? "Return" : "Add new supplier"}
      </button>
      
      {!newSupplierRender ? <PersonEntityForm entityType="supplier" handlePersistFormData={createNewSupplier}/> :
      null }

      
      </>
  );
}

export default SupplierPage;