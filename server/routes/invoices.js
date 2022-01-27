import express from 'express'
import { getInvoices, createInvoice, updateInvoice, deleteInvoice,  getInvoicesByUser } from '../controllers/invoices.js'

const router = express.Router()

router.get('/', getInvoices)
router.get('/', getInvoicesByUser)
router.post('/', createInvoice)
router.patch('/:id', updateInvoice)
router.delete('/:id', deleteInvoice)


export default router