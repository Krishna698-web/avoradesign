import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { CardContext } from "../Context/cardContext";

const ContactForm = () => {
  const { setShowModal } = useContext(CardContext);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal>
      <div
        className="absolute h-full w-full bg-slate-400 bg-opacity-25 backdrop-blur-sm"
        onClick={() => setShowModal(false)}></div>
      <div className="lg:w-1/3 md:w-5/12 sm:w-10/12 max-sm:w-10/12 relative z-20 bg-white py-4 px-6 rounded-md drop-shadow-md">
        <form onSubmit={submitHandler}>
          <h1 className="ml-1 font-bold text-2xl text-blue-950">
            Send Enquiry
          </h1>
          <div className="mt-3">
            <Input type="text" id="name" label={"Name"} placeholder="Kamlesh" />
          </div>
          <div className="mt-3">
            <Input
              type="tel"
              id="number"
              label={"Mobile Number"}
              placeholder="91#####321"
            />
          </div>
          <div className="mt-3">
            <Input
              type={"email"}
              id={"email"}
              label={"Email"}
              placeholder="kamlesh@gmail.com"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="info" className="block font-semibold ml-1">
              Enquiry about
            </label>
            <textarea
              name="info"
              id="info"
              className="border w-full py-2
            px-3
            rounded-sm"></textarea>
          </div>
          <Button
            onClick={() => setShowModal(false)}
            btnValue={"Submit"}
            className={"mx-auto block "}
          />
        </form>
        <button
          onClick={() => setShowModal(false)}
          className="border py-1 px-3 rounded-md mt-2 float-right text-slate-600 text-sm">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ContactForm;
