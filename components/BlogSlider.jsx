"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import Image from "next/image";

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
                            <Image src="/blog-1.png" class="card-img-top" alt="..." width={0} height={0} layout="responsive"/>
                            <div class="card-body">
                                <h5 class="card-title">Dating In Digital Age</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" class="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <Image src="/blog-2.png" class="card-img-top" alt="..." width={0} height={0} layout="responsive"/>
                            <div class="card-body">
                                <h5 class="card-title">Effective  Communication</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" class="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <Image src="/blog-3.png" class="card-img-top" alt="..." width={0} height={0} layout="responsive"/>
                            <div class="card-body">
                                <h5 class="card-title">Self Care & Relationship</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" class="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <Image src="/blog-1.png" class="card-img-top" alt="..." width={0} height={0} layout="responsive"/>
                            <div class="card-body">
                                <h5 class="card-title">Dating In Digital Age</h5>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" class="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
