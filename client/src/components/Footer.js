import React from 'react';

const Footer =({name, address, email, phoneNumber})=> {
  return (
  <>
       <footer className="px-5 mt-10 lg:px-0 border-t border-gray-300 pt-5 pb-10">
        <ul className="flex items-center justify-center flex-wrap">
          <li className="font-bold mx-2">
            {name}: <span className="font-light">{address}</span>
          </li>
          <li className="font-bold mx-2">
            Email: <span className="font-light">{email}</span>
          </li>
          <li className="font-bold mx-2">
            Phone: <span className="font-light">{phoneNumber}</span>
          </li>
          {/* <li className="font-bold mx-2">
            Website: <span className="font-light">details</span>
          </li>
          <li className="font-bold mx-2">
            Bank: <span className="font-light">details</span>
          </li>
          <li className="font-bold mx-2">
            Account Number: <span className="font-light">details</span>
          </li>
          <li className="font-bold mx-2">
            Account Holder: <span className="font-light">{name}</span>
          </li> */}
        </ul>
      </footer>
  </>
  )
}

export default Footer
