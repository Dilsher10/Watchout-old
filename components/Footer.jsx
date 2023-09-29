import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="/logo.png" alt="" />
                        <div class="card mb-4 mt-4">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <img src="/footer_icon.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <p class="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <img src="/footer_icon.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <p class="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <img src="/footer_icon.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <p class="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <img src="/blog-2.png" className='img-fluid' id='footerImg' alt="" />
                        <div class="card mb-4">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <img src="/footer_icon.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <p class="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <img src="/footer_icon.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <p class="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <h1>Our News Signup</h1>
                        <p className='footerText'>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam</p>
                        <form action="">
                            <input type="text" className='form-control' placeholder='Enter Email' />
                            <button className='btn'>Message</button>
                            <h4>Follow Us</h4>
                            <img src="/facebook.png" alt="" />
                            <img src="/insta.png" className='mx-3' alt="" />
                            <img src="/x.png" alt="" />
                        </form>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col">
                        <p className='bottomText-1'>@Copyright 2023 By your WatchOutAlerts</p>
                    </div>
                    <div className="col">
                        <p className='bottomText-2'>Design by Arthur James (OTB Design Solutions)</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer