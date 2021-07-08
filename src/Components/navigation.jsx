import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navigation = (props) => {
  return (
    
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
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
                <NavLink activeClassName="active" to="/Login">
                  <a href="" className='page-scroll'>
                    Sign in
                    </a>
                    </NavLink> 
                </li>
                <li>
                <NavLink activeClassName="active" to="/Login">
                  <a href="" className='page-scroll'>
                    Sign up
                    </a>
                 </NavLink> 
                </li>
                
                
              </ul>
            </div>
          </div>
        </nav>
      )
    }
      
      
    
    