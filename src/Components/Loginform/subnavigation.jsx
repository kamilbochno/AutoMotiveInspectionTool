import styles from '../Home/Home.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
                <HashLink to ="/#features" className='page-scroll'>
                  
                    Features
                  
                  </HashLink>
                </li>
                <li>
                <HashLink to ="/#about" className='page-scroll'>
                    About
                </HashLink>
                </li>
                <li>
                  <HashLink to="/#services" className='page-scroll'>
                    Services
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#portfolio" className='page-scroll'>
                    Gallery
                  </HashLink>
                </li>
                <li>
                <HashLink to="/#testimonials" className='page-scroll'>
                    Testimonials
                  </HashLink>
                </li>
                
                <li>
                <HashLink to="/#contact" className='page-scroll'>
                    Contact
                  </HashLink>
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
                
                
              </ul>
            </div>
            
          </nav>
          
          
        
        
      )
    }
      
      
  export default Navigation;