import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const branchLoc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2195600952487!2d75.12117641437735!3d15.364590962016948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7356f725b09%3A0xe85a2e8c0e433478!2sOaks%202.0!5e0!3m2!1sen!2sin!4v1633436419361!5m2!1sen!2sin";
  return (
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">Б</span>із туралы
            </h2>
            <p>
              Біз еліміздің әсем, бірақ танымал емес жерлерін халыққа көрсетуге, зерттеуге, бағыттауға арналған жаңа стартаппыз. Еліміздің сұлулығын бірге ашайық!
            </p>
          </div>
          {/* <div className="branch">
            <h2>
              <span id="fdiff">B</span>ranch Location
            </h2>
            <iframe
              src={branchLoc}
              style={{ border: 0 }}
              id="map"
              allowFullScreen=""
              loading="lazy"
              title="Brach Location"
            ></iframe>
          </div> */}
          <div className="quicklinks">
            <h2>
              <span id="fdiff">С</span>ілтемелер
            </h2>
            <ul>
              <li>
                <Link to="/">Басты бет</Link>
              </li>
              <li>
                <Link to="/book">Тіркеу</Link>
              </li>
              <li>
                <Link to="/locations">Толығырақ</Link>
              </li>
              <li>
                <Link to="/contact">Байланыс</Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h2>
              <span id="fdiff">Б</span>ізге жазылыңыз
            </h2>
            <ul>
              <li>
                <Link to="/" id="instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="facebook">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="twitter">
                  <i className="fab fa-telegram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy">
          <h2>
            Copyright &copy; <span id="fdiff">B</span>izdin logo 2024 | All
            Rights Reserved
          </h2>
        </div>
      </div>
    </>
  );
};
