import mongoose from "mongoose";

const InvoiceSchema = mongoose.Schema({
  name: String,
  address: String,
  email: String,
  website: String,
  Phone: String,
  clientName: String,
  clientAddress: String,
  status: String,
  invoiceNumber: String,
  dueDate: Date,
  invoiceDate: Date,
  items: [{ desc: String, quantity: Number, price: Number, Amount: Number }],
  bankName: String,
  bankAccount: String,
  Total: String,
  note: String,
});

const InvoiceModel = mongoose.model("InvoiceModel", InvoiceSchema);
export default InvoiceModel;
