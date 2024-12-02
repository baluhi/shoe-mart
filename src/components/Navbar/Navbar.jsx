import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Mic,User } from 'lucide-react'
import './navbar.css';
const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg bg-light  ">
      <div className="container-fluid">
      <Link className="flex items-center  w-25 text-xl font-bold" href="/">
            <ShoppingBag className="h-6 w-6 text-dark" />
            <span className='text-dark h6 ms-3 '>Shoe-World</span>
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <Link to='/' className="nav-link active text-dark" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-link text-dark" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/hotdeals' className="nav-link text-dark" href="#">
                Hot Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/offers' className="nav-link text-dark" href="#">
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/brands' className="nav-link text-dark" href="#">
                Brands
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/shop' className="nav-link text-dark" href="#">
                Shop
              </Link>
            </li>
           
          
          </ul>
        </div>

        <form action="" className="form-control w-25 d-flex justify-content-around align-items-center">
        <Mic className="icons " />
        <input type="text " className='form-control border-0' />
        <Search className=" icons me-3" />
        <User className=" icons" />
        </form>
        
      </div>
    </nav>
  );
};

export default Navbar;
