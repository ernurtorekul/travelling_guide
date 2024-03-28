import Form from "../components/Form";
import contactbg from "../media/contactus.png";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h2>
          Билеттерге тапсырыс беру үшін бізге хабарласыңыз
          <hr />
        </h2>
        <section className="how" id="how">
          <div className="contbox"></div>
        </section>
        <div className="row">
          <div className="img">
            <img src={contactbg} id="contactimg" alt={""} />
          </div>
          <Form />
        </div>
      </section>
      <hr id="line" />

      <div className="callbox">
        <i className="fas fa-phone"></i> +7 772 234 43 34
      </div>
      <div className="callbox">
        <i className="fas fa-briefcase"></i> 0111-555 67 65
      </div>
      <div className="callbox">
        <i className="fas fa-envelope"></i> bizdin@gmail.com
      </div>
    </>
  );
};
