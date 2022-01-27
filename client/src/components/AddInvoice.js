import { useState, useEffect } from "react";
import {ClientDetails, Date, Footer, Header, MainDetails, Notes, Table, TableForm, api, SendModal} from "./";
import { Navigate, useLocation } from "react-router";
import Invoices from "./Invoices";
import { useNavigate } from "react-router-dom";



export default function AddInvoice() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [note, setNote] = useState("")
  const [status, setStatus] = useState("")
  const [desc, setDesc] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const navigate = useNavigate();

  
  const handleClick = () => {    
    navigate(`/invoices`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInvoice = {
      name: name,
      address: address,
      email: email,
      website: website,
      phone: phone,
      clientName: clientName,
      clientAddress: clientAddress,
      status: status,
      invoiceNumber: invoiceNumber,
      bankName: bankName,
      bankAccount: bankAccount,
      dueDate: dueDate,
      invoiceDate: invoiceDate,
      items: list,
      total: total,
      note: note

    };
    try {
      const response = await api.post('/invoices', newInvoice);
      console.log(response.data);

    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }


  const handlePrint = () => {
    window.print();
  }
  const handleSend = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl  xl:max-w-4xl bg-white rounded shadow">
      {showModal && <SendModal setShowModal={setShowModal}/>}

        {showInvoice ? <div>
          <Header handleSend= {handleSend} />

          <MainDetails name={name} address={address} status={status} />

          <ClientDetails clientName={clientName} clientAddress={clientAddress} />

          <Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

          <Table
            desc={desc}
            quantity={quantity}
            price={price}
            amount={amount}
            list={list}
            setList={setList}
            total={total}
            setTotal={setTotal}
          />

          <Notes note={note} />

          <Footer name={name} address={address} email={email} phoneNumber={phone}  />
          <button onClick={() => setShowInvoice(false)} className="mr-5 mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
            Edit Invoice
          </button>
          <button onClick={handleClick} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
            View Invoice
          </button>

        </div> :
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)} />

              <label htmlFor="Address">Address</label>
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />



              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />




              <label htmlFor="text">Website</label>
              <input
                type="text"
                name="website"
                id="website"
                placeholder="Enter your website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)} />


              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Enter your phone Number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
                
                <label htmlFor="account">Bank Name</label>
              <input
                type="text"
                name="text"
                id="bankName"
                placeholder="Enter your Bank Name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)} />
              <label htmlFor="account">Account</label>
              <input
                type="text"
                name="text"
                id="account"
                placeholder="Enter your Account Number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)} />

              <label htmlFor="name">Client Name</label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your Client's name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)} />

              <label htmlFor="name">Client Address</label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your Client's address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)} />

              <label htmlFor="Address">Status</label>
              <input
                type="text"
                name="text"
                id="status"
                placeholder="invoice status"
                autoComplete="off"
                value={status}
                onChange={(e) => setStatus(e.target.value)} />

              <label htmlFor="name">Invoice Number</label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)} />

              <label htmlFor="invoiceDate">Invoice Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)} />

              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                placeholder="dueDate"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)} />

              <article>
                <TableForm
                  desc={desc} setDesc={setDesc}
                  quantity={quantity} setQuantity={setQuantity}
                  price={price} setPrice={setPrice}
                  amount={amount} setAmount={setAmount}
                  list={list} setList={setList}
                  total={total} setTotal={setTotal}
                />
              </article>

              <label htmlFor="name">Additional Notes</label>
              <textarea
                type="text"
                cols="30"
                rows="10"
                name="text"
                id="text"
                placeholder="Additional Notes"
                autoComplete="off"
                value={note}
                onChange={(e) => setNote(e.target.value)}>
              </textarea>
              <div className="fles flex-cols-2 justify-between">
                <button onClick={(e) => handleSubmit(e)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Save</button>
                <button onClick={() => setShowInvoice(true)} className="ml-10 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>

              </div>
            </div>
          </>}
      </main>


    </>
  )
}



