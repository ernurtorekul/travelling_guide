import "./BookSection.css";
import bookingimg from "../media/booking.png";

import { Link } from "react-router-dom";

export const BookSection = () => {
  return (
    <>
      <div className="container2">
        <section className="book" id="book">
          <h1>Жақындарыңа қуаныш сыйла!</h1>

          <div className="row">
            <div className="image">
              <img src={bookingimg} id="flyimg" alt={"Bookings"} />
            </div>
            <div className="box">
              <h2>
                Билеттерге тапсырыс бер
                <hr />
              </h2>
              <p>Армандаған сапарыңызға бір қадам жақындаңыз !</p>
              <Link to="/contact">
                <div className="btn">
                  <button className="book-btn">Тапсырыс беру</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
