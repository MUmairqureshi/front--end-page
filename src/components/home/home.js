import './home.scss'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import { Carousel } from 'react-bootstrap';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import EuroIcon from '@mui/icons-material/Euro';

import { Card } from 'react-bootstrap';
// import {

// 	CardBody,
// 	CardTitle,
// 	CardSubtitle,
// 	CardText,
// 	CardHeader,
// 	Col,
// } from "reactstrap";

// import Color from "color-thief-react";

// import { Fade } from "react-reveal";

export function Home() {

  return (
    <div >
      <div className="container py-0">
        <div className="row py-0 " >
          <br />
          <div className="col-md-4 py-5">
            <h4 className="text-uppercase text-black-50" >
              Properties
            </h4>
            <h2 className="display-5-d h2" > Drow Your Elegance </h2>
            <h5 className="lead-l h5 "> Lorial ispurm is  fake test
            </h5>
          </div>

          <div className="col-md-8">
            <img className="responsive mx-auto" src={pic1} height="400px" />
          </div>

        </div>
      </div>
      <br />
      <br />

      <div className="container py-16">
        <div className="row py-16 " >
          <br />
          <div className="col-md-6 py-5">
            <h4 className="text-uppercase text-black-50" >
              Interactive Map
            </h4>
            <h2 className="display-5-d h2" >  Crafting on Syrategic Locales </h2>
            <p className="lead-l p ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>

          <div className=" col-md-6">
            <img className="responsive mx-auto " src={pic2} height="450px" />
          </div>

        </div>
      </div>




      <br />
      <br />










      <section id="services">
        <div class="container text-center">
          <h1 class="title">WHAT WE DO?</h1>
          <div class="horizontal-line"><span></span></div>
          <br />
          <br />
          <div class="row text-center">
            <div class="col-md-4 services">
              <h1>     <CurrencyExchangeIcon />
              </h1>
              <p>Growth Marketing</p>

            </div>
            <div class="col-md-4 services">
              <h1><AddLocationAltIcon />
              </h1>
              <p>Online Branding</p>

            </div>
            <div class="col-md-4 services">
              <h1>              <LocalOfferIcon />
              </h1>

              <p>Animated Ads</p>

            </div>
          </div>





          <div class="row text-center">
            <div class="col-md-4 services">
              <h1>
                <CurrencyExchangeIcon />
              </h1>
              <p>Growth Marketing</p>

            </div>
            <div class="col-md-4 services">
              <h1>
                <AddLocationAltIcon />
              </h1>

              <p>Online Branding</p>

            </div>
            <div class="col-md-4 services">
              <h1>
                <LocalOfferIcon />
              </h1>
              <p>Animated Ads</p>

            </div>
          </div>
          <button class="btn btn-primary">All Services</button>
        </div>
      </section>




      <br />
      <br />
      <br />
      <br />







      <div className="container py-16">
        <div className="row py-16 " >

          <div className="col-md-7">
            <img className="responsive mx-auto " src={pic3} height="450px" />
          </div>
          <div className="col-md-3 py-5 mx-auto" >
            <h4 className="text-uppercase fw-bold text-black-50" >
              Our Company
            </h4>
            <h2 className="display-5-d h2 fw-bold" > Lorem Ipsum  </h2>
            <p className="lead-l fw-bold p ">156  </p>
            <p className="lead-l fw-bold p "> 10,179SQM </p>
            <p className="lead-l fw-bold p "> 12,5 BILLION </p>
            <p className="lead-l fw-bold p "> 8,028 </p>
          </div>

        </div>
      </div>





    </div>
  );
}

