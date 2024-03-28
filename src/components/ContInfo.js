import "./ContInfo.css";
import contact from "../media/Contact.png";
import { Link } from "react-router-dom";

export const ContInfo = () => {
  return (
    <>
      <div className="container5">
        <section className="contact" id="contact">
          <h1>Бізбен байланыста бол.</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contact} id="contimg" alt="Contact" />
            </div>

            <div className="box">
              <h2>
                Бізбен хабарласыңыз
                <hr />
              </h2>
              <p>Бізге жазыңыз, біз сізге жақын арада хабарласамыз.</p>
              <Link to="/contact">
                <div className="btn">
                  <button className="cont-btn">Байланыс</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
