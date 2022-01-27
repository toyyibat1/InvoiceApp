import {Fragment} from 'react';

const Table = ({ total, list})=> {
  return (
  <>
      <table width="100%" className='mb-10'>
      <thead>
            <tr  className='bg-gray-100 p-1 '>
                <td className='font-bold'>Item Description</td>
                <td className='font-bold'>Quantity</td>
                <td  className='font-bold'>Price</td>
                <td  className='font-bold'>Amount</td>
            </tr>           
           
        </thead>
        {list.map(({ id, desc, quantity, price, amount})=>(
          <Fragment key={id}>
           
        
        <tbody>
            <tr>
                <td>{desc}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
            </tr>
        </tbody>
  
          </Fragment>
          ))}
       </table>
       <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          N {total.toLocaleString()}
        </h2>
      </div>
  </>
  )
}

export default Table

