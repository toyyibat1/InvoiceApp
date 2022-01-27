
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000'
});

// export const fetchInvoice =() => API.get('/invoices')
// export const createInvoice =(invoice) => API.post('/invoices', invoice)

