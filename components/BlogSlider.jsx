"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class BlogSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div class="card">
                            <img src="/blog-1.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dating In Digital Age</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <img src="/blog-2.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Effective  Communication</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <img src="/blog-3.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Self Care & Relationship</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <img src="/blog-1.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dating In Digital Age</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
