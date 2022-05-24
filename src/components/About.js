import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header/contact.css'
function Aboute() {
  return (
    <div class="contact_us">
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="contact_inner">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="contact_form_inner">
                                <div class="contact_field">
                                    <h3>Get in Touch </h3>
                                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                    <input type="text" class="form-control form-group" placeholder="Name" />
                                    <input type="text" class="form-control form-group" placeholder="Email" />
                                    <textarea class="form-control form-group" placeholder="Message"></textarea>
                                    <button class="contact_form_submit">Send</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="right_conatct_social_icon d-flex align-items-end">
                               <div class="socil_item_inner d-flex">
                                  <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact_info_sec">
                        <h4>Contact Info</h4>
                        <div class="d-flex info_single align-items-center">
                            <i className="fas fa-headset"></i>
                            <span>+250 788 393331</span>
                        </div>
                        <div class="d-flex info_single align-items-center">
                            <i className="fas fa-envelope-open-text"></i>
                            <span>jonathan@kalisa.com</span>
                        </div>
                        <div class="d-flex info_single align-items-center">
                            <i className="fas fa-map-marked-alt"></i>
                            <span>Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Aboute