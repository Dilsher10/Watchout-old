"use client";
import { React, useEffect } from "react"
import BlogSlider from "../../components/BlogSlider"
import Slider from "../../components/Slider"
import TestimonialSlider from "../../components/TestimonialSlider"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import imageLoader from "../../components/imageLoader";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  return (
    <>
      {/* Header */}

      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1>Stop Dating blindly</h1>
              <h3>Before Dating Watch Out</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Image loader={imageLoader} src="home-1.png" alt="" width={600} height={450}/>
            </div>
          </div>
        </div>
      </header>


      {/* Icons Section */}

      <section className='iconSec' data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <Image loader={imageLoader} src="star.png" class="card-img-top" alt="..." width={70} height={70}/>
                <div class="card-body">
                  <h5 class="card-title">Review</h5>
                  <h5 class="card-title">322K+</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <Image loader={imageLoader} src="sticker.png" class="card-img-top" alt="..." width={70} height={70}/>
                <div class="card-body">
                  <h5 class="card-title">Happy Users</h5>
                  <h5 class="card-title">47K+</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div class="card">
                <Image loader={imageLoader} src="team.png" class="card-img-top" alt="..." width={70} height={70} />
                <div class="card-body">
                  <h5 class="card-title">Members</h5>
                  <h5 class="card-title">322K+</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Slider */}

      <div className="container" data-aos="fade-up">
        <Slider />
      </div>


      <section className='groupSec' data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1>Simple & Quick Way to Stay Alert</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis </p>
              <button className='btn-2'>Submit Alert</button>
              <button className='btn-1'>View Alerts</button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Image loader={imageLoader} src="group-img.png" alt="" className='img-fluid' width={300} height={0} />
            </div>
          </div>
        </div>
      </section>



      <div className="container processSec" data-aos="fade-up">
        <h1>Watch Out Process</h1>
        <p className='processText'>Lorem Ipsum is simply dummy text of the printing </p>
        <div className="row">
          <div className="col">
            <div class="card">
              <Image loader={imageLoader} src="process-1.png" class="img-fluid" alt="..." width={100} height={100} />
              <div class="card-body">
                <h5 class="card-title">Create <br /> Account</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div class="card">
              <Image loader={imageLoader} src="process-arrow.png" class="img-fluid" id='arrowImg' alt="..." width={100} height={100}/>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <Image loader={imageLoader} src="process-2.png" class="img-fluid" alt="..." width={100} height={100}/>
              <div class="card-body">
                <h5 class="card-title">Watch Out <br /> Alerts</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div class="card">
              <Image loader={imageLoader} src="process-arrow.png" class="img-fluid" id='arrowImg' alt="..." width={100} height={100}/>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <Image loader={imageLoader} src="process-3.png" class="img-fluid" alt="..." width={100} height={100}/>
              <div class="card-body">
                <h5 class="card-title">Beware</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section className='multiSec' data-aos="fade-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Image loader={imageLoader} src="home-2.png" className='img-fluid' id="multiImg" alt="" width={0} height={0} layout="responsive"/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-2">
                    <Image loader={imageLoader} src="user.png" class="img-fluid rounded-start" alt="..." width={70} height={70}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Toxic Partner?</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetue   adipiscing elit, sed diam nonummy nibh </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-2">
                    <Image loader={imageLoader} src="user.png" class="img-fluid rounded-start" alt="..." width={70} height={70}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Toxic Partner?</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetue   adipiscing elit, sed diam nonummy nibh </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-2">
                    <Image loader={imageLoader} src="user.png" class="img-fluid rounded-start" alt="..." width={70} height={70}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Toxic Partner?</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetue   adipiscing elit, sed diam nonummy nibh </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container mt-5" data-aos="fade-up">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h2>Australia</h2>
              <Image loader={imageLoader} src="line.png" className='img-fluid' id="line" alt="" width={0} height={0} layout="responsive"/>
              <div className='div-1'>
                <h3>Alerts</h3>
                <Image loader={imageLoader} src="vertical-line.png" className='img-fluid' alt="" width={5} height={20}/>
                <h3>6K+</h3>
              </div>
              <p className='text-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Image loader={imageLoader} src="map.png" className='img-fluid' alt="" width={0} height={0} layout="responsive" />
            </div>
          </div>
        </div>



        <div className="container formSec" data-aos="fade-up">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h2>Search For Alerts</h2>
              <p className='text-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis </p>
              <button className='btn-3'>Join Now</button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <form class="row g-3">
                <div class="col-md-12">
                  <select id="inputState" class="form-select">
                    <option selected>Location</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <select id="inputState" class="form-select">
                    <option selected>Labels</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Cheating
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Harassment
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Physical Abuse
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Play Boy/Girl
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Gold Digger
                    </label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                      Toxic
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <select id="inputState" class="form-select">
                    <option selected>Gender</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-6">
                  <select id="inputState" class="form-select">
                    <option selected>Ethnicity</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select id="inputState" class="form-select">
                    <option selected>Dating Period</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select id="inputState" class="form-select">
                    <option selected>Age</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-12">
                  <button class="searchBtn">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial Slider */}

      <section className='testimonialSec' data-aos="fade-up">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>




      {/* Blogs Section */}

      <section className="blogSec" data-aos="fade-up">
        <div className="container">
          <h1>Watch Out Blogs</h1>
          <BlogSlider />
        </div>
      </section>


      {/* Mobile Section */}

      <section className="mobileSec" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <h1>Download Our App</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
              <div className="imgDiv">
                <Image loader={imageLoader} src="android-store.png" alt="" width={70} height={70} />
                <Image loader={imageLoader} src="app-store.png" alt="" width={70} height={70} />
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5">
              <Image loader={imageLoader} src="mobile.png" className="img-fluid" alt="" width={0} height={0} layout="responsive"/>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
