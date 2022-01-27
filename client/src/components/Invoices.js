import {Fragment, useEffect, useState, React} from 'react';
import {api} from './';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const Invoices = ({desc, quantity, price, amount, list, total}) => {
    const [invoice, setInvoice] = useState([])

    useEffect(() => {
        const fetchInvoices = async () => {
          try {
            const response = await api.get('/invoices');
            setInvoice(response.data)
            console.log(response.data);
          } catch (err) {
            if (err.response) {
              // Not in the 200 response range 
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            } else {
              console.log(`Error: ${err.message}`);
            }
          }
        }
    
        fetchInvoices();
      }, [])

      const headerStyle = { borderBottom: 'none', textAlign: 'center'}
      const tableStyle = { width: 160, fontSize: 14, cursor: 'pointer', borderBottom: 'none',  padding: '8px', textAlign: 'center' }

    //   const desired = abc.map(({id, name, sections}) => 
    //  {id, name, desc : sectionDetail.filter(f => {
    //     return sections.map(s => +s).includes(f.id)
    // })})

  return (
    <>
    <Link to='invoices'>
    <TableContainer component={Paper} elevation={0}>
      <Table aria-label="custom pagination table">

      <TableHead>
          <TableRow>
            <TableCell style={headerStyle}>InvoiceNumber</TableCell>
            <TableCell style={headerStyle}>ClientName</TableCell>
            <TableCell style={headerStyle}>Invoice Date</TableCell>
            <TableCell style={headerStyle}>DueDate</TableCell>
            <TableCell style={headerStyle}>Status</TableCell>
            <TableCell style={headerStyle}>Notes</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {invoice.map((row) => (
            <TableRow key={row._id} style={{cursor: 'pointer'}} >
                <TableCell style={tableStyle} > {row.invoiceNumber} </TableCell>
                <TableCell  style={tableStyle} > {row.name} </TableCell>
                <TableCell style={tableStyle}  > {row.invoiceDate} </TableCell>
                <TableCell style={tableStyle} >{row.dueDate}</TableCell>
             
                <TableCell style={{...tableStyle, width: '10px'}}>
                {row.status}
              </TableCell>
              <TableCell style={{...tableStyle, width: '10px'}}>
                  {row.note}
              </TableCell>
            </TableRow>
          ))}

          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>

        </Table>
    </TableContainer>
    </Link>
</>
  );
}

export default Invoices;
