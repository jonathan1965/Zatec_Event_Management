import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header/home.css'

function Homepage() {
  return (
      <div className='card-att'>
    <div ClassName="container">
  <div class="container pt-5">
    <div class="row align-items-stretch">
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Attended<svg
              class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
              </path>
            </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">10</span>
            <span
            class="hind-font caption-12 c-dashboardInfo__subInfo">People</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Not Attended<svg
              class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
              </path>
            </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">50</span><span
            class="hind-font caption-12 c-dashboardInfo__subInfo">People</span>
        </div>
      </div>
      <div class="c-dashboardInfo col-lg-3 col-md-6">
        <div class="wrap">
          <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Total<svg
              class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
              </path>
            </svg></h4><span class="hind-font caption-12 c-dashboardInfo__count">20</span><span
            class="hind-font caption-12 c-dashboardInfo__subInfo">People</span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Homepage