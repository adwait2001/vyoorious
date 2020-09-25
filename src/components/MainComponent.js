import React from 'react';
import { Link } from 'react-router-dom';
import main from '../main image.png'
import './main.css'

const MainComponent = () => {
    return (
        <section id="header" className="section">
            <div className="container-fluid">
                <div className="col-12 mx-auto">
                    <div className="row">
                        <div className="col-md-5 order-2 order-lg-1 mt10 text">
                            <div className="content">
                            <div className="orange">CONNECTED THE DISCONNECTED</div>
                            <h1><span className="orange">Vyorius</span> brings unmanned  <br/>
                            robots <span className="orange">together</span>,<br/>
                             wherever they are</h1>
                            <h6>With all of the operations, commanding and maintenance <br/>
                             tools in one place, unmanned vehicles will stay connected <br/>
                              and productive no matter where you’re Delivering</h6>
                            <div className="row">
                                <button className="btn btn-one btn-default"><span className="btn-text-1">Try Vyorius</span></button>
                                <button className="btn-one btn btn-two"><span className="btn-text-2">Learn More</span></button>
                            </div>
                            <div className="mt-2">Need to order a delivery ? <Link>get started</Link></div>
                        </div>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2 header-img ">
                            <div className="image">
                            <img className="img-adjust img-fluid" src={main} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainComponent;
