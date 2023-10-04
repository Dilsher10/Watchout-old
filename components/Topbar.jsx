import React from 'react'
import Image from "next/image";
import imageLoader from './imageLoader';

const Topbar = () => {
    return (
        <section className='topBar'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <Image loader={imageLoader} src="phone.png" class="img-fluid" alt="..." width={30} height={30}/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <p class="card-text">+1234567890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card" id='card-2'>
                            <div class="row g-0">
                                <div class="col-1">
                                    <Image loader={imageLoader} src="news.png" class="img-fluid" alt="..." width={30} height={30}/>
                                </div>
                                <div class="col-6">
                                    <div class="card-body" id='newsText'>
                                        <p class="card-text">News & Alert</p>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <ul>
                                        <li><Image loader={imageLoader} src="x.png" alt="" width={20} height={20}/></li>
                                        <li><Image loader={imageLoader} src="insta.png" alt="" width={20} height={20}/></li>
                                        <li><Image loader={imageLoader} src="facebook.png" alt="" width={20} height={20}/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar