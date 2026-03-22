import baseConnection from '../../../shared/config/baseConnection';

const SupplierService = {

    createSupplier: async (supplier) => {
        return await baseConnection
            .post("/suppliers", supplier);
    },

    getSupplier: async (id) => {
        return await baseConnection
            .get("suppliers/" + id);
    },

    getSuppliers: async () => {
        return await baseConnection
            .get("/suppliers");
    },

    updateSupplier: async (id, supplier) => {
        return await baseConnection
            .put("suppliers/" + id, supplier);
    },

    deleteSupplier: async (id) => {
        return await baseConnection
            .delete(`/suppliers/${id}`);
    },
}

export default SupplierService;