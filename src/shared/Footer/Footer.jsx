import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

const Footer = () => {
    return (
        <div>
          <footer className="text-white text-center text-lg-start" style={{ background : 'linear-gradient(90deg, #383838 0%, #867474 100%)' }}>
            <div className="container p-4">
              <div className="row mt-4">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">About Us</h5>
        
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti.
                  </p>
        
                  <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                    molestias.
                  </p>
        
                  <div className="mt-4">
                  
                    <a type="button" className="btn btn-floating btn-warning btn-lg me-2"><FontAwesomeIcon icon={faFacebook} /></a>
      
                    <a type="button" className="btn btn-floating btn-warning btn-lg me-2"><FontAwesomeIcon icon={faTwitter} /></a>
                
                    <a type="button" className="btn btn-floating btn-warning btn-lg me-2"><FontAwesomeIcon icon={faInstagram} /></a>
          
                    <a type="button" className="btn btn-floating btn-warning btn-lg"><FontAwesomeIcon icon={faYoutube} /></a>
           
                  </div>
                </div>
              
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4 pb-1">Subscribe Us</h5>
        
                  <div className="form-outline form-white mb-4">
                    <input type="text" id="formControlLg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="formControlLg" style={{marginLeft: '0px'}}>Subscribe</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{width: '9px'}}></div><div className="form-notch-middle" style={{ width: '48.8px'}}></div><div className="form-notch-trailing"></div></div></div>
        
                  <ul className="fa-ul" style={{ marginLeft:"30px" }}>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">New York, Antalaya, Turkey</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
                    </li>
                    <li className="mb-3">
                      <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
                    </li>
                  </ul>
                </div>
              
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">Opening hours</h5>
        
                  <table className="table text-center text-white">
                    <tbody className="font-weight-normal">
                      <tr>
                        <td>Mon - Thu:</td>
                        <td>8am - 9pm</td>
                      </tr>
                      <tr>
                        <td>Fri - Sat:</td>
                        <td>8am - 1am</td>
                      </tr>
                      <tr>
                        <td>Sunday:</td>
                        <td>9am - 10pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
      
              </div>

            </div>
        
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2023 Copyright:
               <span> Cooking-Lights</span>
            </div>
           
          </footer>
        </div>

    );
};

export default Footer;