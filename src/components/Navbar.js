import './Navbar.css'
import { Link } from "react-router-dom"

export const Navbar = () => {
  

  return (
    <nav>
      <div className="logo">
        <Link to="/"><span>B</span>izdin logo</Link>
      </div>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>

      <ul className="list">
        <li id="active"><Link to="/">Басты бет</Link></li>
        <li><Link to="/book" id="d">Тіркеу</Link></li>
        <li id="drop">
        <Link to="/locations" id="d">Аудандар</Link>
          <ul>
            <li><Link to="/locations/goa" id="d">Меркі</Link></li>
            <li>
            <Link to="/locations/uttarakhand" id="d">Шу</Link>
            </li>
            <li>
            <Link to="/locations/kerala" id="d">Сарысу</Link>
            </li>
            <li>
            <Link to="/locations/chennai" id="d">Жуалы</Link>
            </li>
            <li>
            <Link to="/locations/delhi" id="d">Т.Рысқұлов</Link>
            </li>
            <li>
            <Link to="/locations/rajasthan" id="d">Қордай</Link>
            </li>
            <li>
            <Link to="/locations" id="d">Толығырақ..</Link>
            </li>
          </ul>
        </li>
        <li id="drop">
        <Link to="/locations" id="d">Қала көріктері</Link>
          <ul>
            <li><Link to="/locations/dubai" id="d">Айша Бибі мазары</Link></li>
            <li><Link to="/locations/europe" id="d">Қарахан кесенесі</Link></li>
            <li><Link to="/locations/srilanka" id="d">Тектұрмас кешені</Link></li>
            <li><Link to="/locations/thailand" id="d">Тараз тарихи-өлкетану мұражайы</Link></li>
            <li><Link to="/locations/maldives" id="d">Қали Жүніс шығыс моншасы</Link></li>
            <li><Link to="/locations" id="d">Барлығы..</Link></li>
          </ul>
        </li>
        <li><Link to="/locations" id="d">Толығырақ</Link></li>
        <li><Link to="/contact" id="d">Байланыс</Link></li>
      </ul>
    </nav>
  )
}