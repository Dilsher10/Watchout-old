import React from 'react'
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Image src="/logo.png" alt="" width={210} height={60}/>
                        <div class="card mb-4 mt-4">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <Image src="/footer_icon.png" class="img-fluid rounded-start" alt="..." width={18} height={10}/>
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
                                    <Image src="/footer_icon.png" class="img-fluid rounded-start" alt="..." width={18} height={10}/>
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
                                    <Image src="/footer_icon.png" class="img-fluid rounded-start" alt="..." width={18} height={10}/>
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
                        <Image src="/blog-2.png" className='img-fluid' id='footerImg' alt="" width={0} height={0} layout='responsive'/>
                        <div class="card mb-4">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <Image src="/footer_icon.png" class="img-fluid rounded-start" alt="..." width={18} height={10}/>
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
                                    <Image src="/footer_icon.png" class="img-fluid rounded-start" alt="..." width={18} height={10}/>
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
                            <Image src="/facebook.png" alt="" width={20} height={20} />
                            <Image src="/insta.png" className='mx-3' alt="" width={20} height={20} />
                            <Image src="/x.png" alt="" width={20} height={20} />
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