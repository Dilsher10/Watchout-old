'use client'
import React from "react";

const imageLoader = ({ src, width, quality }) => {
    return `https://gorilladesigners.com/${src}?w=${width}&q=${quality || 75}`
}


export default imageLoader;