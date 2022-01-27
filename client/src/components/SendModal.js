import { useState } from "react"
import { GrFormClose } from "react-icons/gr"
import { IoIosSend } from "react-icons/io"

export default function SendModal({ setShowModal }) {
  const [userEmail, setUserEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userEmail) {
      alert("Sorry, input is empty")
      console.log("Unable to send, input is empty")
    }
  }

  return (
    <>
      <article className="send__modal shadow">
        <div className="relative mb-5">
          <h4 className="uppercase text-center text-2xl">
            Send your invoice to your client
          </h4>
          <button
            className="absolute right-0 -top-10"
            onClick={() => setShowModal(false)}
          >
            <GrFormClose className="text-4xl text-gray-900" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center flex-col">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            autoComplete="off"
            className="bg-white shadow py-2 rounded shadow mb-3 md:w-1/2 mx-auto text-lg placeholder-text-lg"
          />

          <a
            href={`mailto:${userEmail}`}
            className="bg-blue-500 md:w-1/2 block text-center text-white text-lg flex items-center justify-center py-2 rounded shadow mx-auto"
          >
            Send <IoIosSend className="ml-2 text-xl" />
          </a>
        </form>
      </article>
    </>
  )
}
