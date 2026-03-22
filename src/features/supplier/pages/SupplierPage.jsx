import { useEffect, useState } from "react";
import PersonEntityForm from "../../person-entity/person-entity-form/PersonEntityForm";
import PersonEntityList from "../../person-entity/person-entity-list/PersonEntityList";
import { sendErrorToast, sendSuccessToast } from "../../../util/Toast";
import SupplierService from "../services/SupplierService";

const SupplierPage = () => {

  const createNewSupplier = (supplier) => {
    SupplierService.createSupplier(supplier).then(() => {
      sendSuccessToast("Supplier created successfully!");
      setSuppliers([...suppliers, supplier]);
      setNewSupplierRender(false);
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

  const handleClickNewSupplier = () => {
    setNewSupplierRender(newSupplierRender === true ? false : true);
  };

  function updateSupplier(supplier) {
    SupplierService.updateSupplier(supplier.id, supplier).then(() => {
      sendSuccessToast("Successfully updated!");
      getSuppliers();
    })
      .catch((err) => {
        sendErrorToast("Network error. Try again later")
      });
  }

  return (
    <>

      <div className="Main-container">
        <PersonEntityList personEntities={suppliers} handleUpdateEntity={updateSupplier} />

        <button onClick={handleClickNewSupplier} style={{ marginRight: "50%", marginTop: "20px" }}>
          {!newSupplierRender ? "Return" : "Add new supplier"}
        </button>

        {!newSupplierRender ? <PersonEntityForm entityType="supplier" handlePersistFormData={createNewSupplier} /> :
          null}

      </div>


    </>
  );
}

export default SupplierPage;