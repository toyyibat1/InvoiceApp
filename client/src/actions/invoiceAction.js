import * as api from '../api/index'

// export const getInvoices = () => async (dispatch)=> {
//     try {
//         const { data } = await api.fetchInvoices()
//         dispatch({ type: FETCH_ALL, payload: data })
//     } catch (error) {
//         console.log(error)
//     }
// }


export const createInvoice =(invoice) => async () => {
    try {
        await api.CreateInvoice(invoice)
        
    } catch (error) {
        console.log(error)
    }
}

