import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { CardContext } from "../Context/cardContext";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react";

const ContactForm = () => {
  const { setShowModal } = useContext(CardContext);

  const form = useRef();

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [UserNumber, setUserNumber] = useState();
  const [message, setMessage] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log({ userName, userEmail, UserNumber, message });
    // console.log(emailjs);

    // emailjs
    //   .sendForm(
    //     "service_0ek96p4",
    //     "template_lo0kp76",
    //     info,
    //     "S8IHY4PWGbBWNwJK0"
    //   )
    //   .then(
    //     (res) => {
    //       console.log(res.text);
    //     },
    //     (err) => {
    //       console.log(err.text);
    //     }
    //   );

    emailjs
      .sendForm(
        "service_0ek96p4",
        "template_lo0kp76",
        form.current,
        "S8IHY4PWGbBWNwJK0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setShowModal(false);
  };

  return (
    <Modal>
      <div
        className="absolute h-full w-full bg-slate-400 bg-opacity-25 backdrop-blur-sm"
        onClick={() => setShowModal(false)}></div>
      <div className="lg:w-1/3 md:w-5/12 sm:w-10/12 max-sm:w-10/12 relative z-20 bg-white py-4 px-6 rounded-md drop-shadow-md">
        <form onSubmit={submitHandler} ref={form}>
          <h1 className="ml-1 font-bold text-2xl text-blue-950">
            Send Enquiry
          </h1>
          <div className="mt-3">
            <Input
              type="text"
              id="name"
              name={"user_name"}
              label={"Name"}
              placeholder="Kamlesh"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <Input
              type="tel"
              id="number"
              name={"user_number"}
              label={"Mobile Number"}
              placeholder="91#####321"
              onChange={(e) => setUserNumber(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <Input
              type={"email"}
              id={"email"}
              name={"user_email"}
              label={"Email"}
              placeholder="kamlesh@gmail.com"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="info" className="block font-semibold ml-1">
              Enquiry about
            </label>
            <textarea
              id="info"
              name={"message"}
              className="border w-full py-2
            px-3
            rounded-sm"
              onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <Button
            type="submit"
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
