import {Link} from "react-router-dom"
import {useState} from "react";

const Header = () => {

    const [is_active, setData] = useState(1)
    const ru = {textDecoration: "none"}
    let active = "active"
    let inactive = ''

    const isActive = (id) => {
        setData(id)
        console.log(is_active)
    }

    return (
        <div>

            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">

                        <img src={process.env.PUBLIC_URL + '/assets/img/profile-img.jpg'} alt=""
                             className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="#">Alex Smith</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <nav className="nav-menu">
                        <ul>
                            <li onClick={() => isActive(1)} className={is_active === 1 ? active : inactive}><Link
                                style={ru} to="/"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                            <li onClick={() => isActive(2)} className={is_active === 2 ? active : inactive}><Link
                                style={ru} to="/about"><i className="bx bx-user"></i> <span>About</span></Link></li>
                            <li onClick={() => isActive(3)} className={is_active === 3 ? active : inactive}><Link
                                style={ru} to="/resume"><i className="bx bx-file-blank"></i> <span>Resume</span></Link>
                            </li>
                            <li onClick={() => isActive(4)} className={is_active === 4 ? active : inactive}><Link
                                style={ru} to="/portfolio"><i className="bx bx-book-content"></i> Portfolio</Link></li>
                            <li onClick={() => isActive(5)} className={is_active === 5 ? active : inactive}><Link
                                style={ru} to="/skills"><i className="bx bx-server"></i>Skills</Link></li>
                            <li onClick={() => isActive(6)} className={is_active === 6 ? active : inactive}><Link
                                style={ru} to="/contact"><i className="bx bx-envelope"></i> Contact</Link></li>

                        </ul>
                    </nav>

                    <button type="button" className="mobile-nav-toggle d-xl-none"><i
                        className="icofont-navigation-menu"></i></button>

                </div>
            </header>

        </div>
    )
}

export default Header