import "./Book.css";
import bookImg from '../media/booking.png'
import { BookForm } from "../components/BookForm";

export const Book = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h2>
          Билеттерге тапсырыс беру
          <hr />
        </h2>
        <div className="book-info">
          <p>( Төмендегі форманы толтырыңыз, және бізден байланыс күтіңіз. )</p>  
        </div>
        <div className="row">
          <div className="img">
            <img src={bookImg} id="contactimg" alt={""}/>
          </div>
           <BookForm />
        </div>
      </section>
    </>
  );
};
