import React from 'react'

const Topbar = () => {
    return (
        <section className='topBar'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <img src="/phone.png" class="img-fluid" alt="..." />
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
                                    <img src="/news.png" class="img-fluid" alt="..." />
                                </div>
                                <div class="col-6">
                                    <div class="card-body" id='newsText'>
                                        <p class="card-text">News & Alert</p>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <ul>
                                        <li><img src="/x.png" alt="" /></li>
                                        <li><img src="/insta.png" alt="" /></li>
                                        <li><img src="/facebook.png" alt="" /></li>
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