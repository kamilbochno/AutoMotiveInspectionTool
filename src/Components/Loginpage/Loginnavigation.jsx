import styles from '../Home/Home.css';
import { NavLink } from 'react-router-dom';
import users from '../Loginform/loginuseForm';
export const Navigation = (props) => {
  return (
    
        <nav id='menu' className='navbar navbar-default '>
          
            <div className='navbar-header'>
              <button
                type='button'
                className='navbar-toggle collapsed'
                data-toggle='collapse'
                data-target='#bs-example-navbar-collapse-1'
              >
                {' '}
                <span className='sr-only'>Toggle navigation</span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
              </button>
              <a className='navbar-brand page-scroll' href='#page-top'>
                AutoMotiveInspectionTool
              </a>{' '}
            </div>
    
            <div
              className='collapse navbar-collapse'
              id='bs-example-navbar-collapse-1'
            >
              <ul className='nav navbar-nav'>
                <li>
                  <a href='#features' className='page-scroll'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#about' className='page-scroll'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#services' className='page-scroll'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='#portfolio' className='page-scroll'>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href='#testimonials' className='page-scroll'>
                    Testimonials
                  </a>
                </li>
                
                <li>
                  <a href='#contact' className='page-scroll'>
                    Contact
                  </a>
                </li>
                
            </ul>
            <ul className='nav navbar-nav subpages'>
                <li>
                <NavLink activeClassName="active" to="/Login" className='page-scroll'>                 
                  Sign in         
                </NavLink> 
      
                </li>
                <li>
                <NavLink activeClassName="active" to="/Register" className='page-scroll'>
                Sign up
                    
                 </NavLink> 
                </li>
                <li>
                <NavLink activeClassName="active" to="/Vehicles" className='page-scroll'>                 
                  Vehicles       
                </NavLink> 
                </li> 
                <li>
                <NavLink activeClassName="active" to="/Addvehicle" className='page-scroll'>                 
                  Add vehicle        
                </NavLink> 
                </li>   
                <li>
                <NavLink activeClassName="active" to="/" className='page-scroll'>                 
                  Logout        
                </NavLink> 
                </li>  
                    
                
                
              </ul>
            </div>
            
          </nav>
          
          
        
        
      )
    }
      
      
  export default Navigation;
    