import React from "react";

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={className}>
            <svg className="w-full h-full" viewBox="0 0 139.32 141.702" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a"><stop offset="0" stop-color="#93c5fd"/><stop offset="1" stop-color="#2860e8" stop-opacity="0"/></linearGradient><linearGradient xlink:href="#a" id="c" x1="55.431" y1="148.609" x2="57.961" y2="167.679" gradientUnits="userSpaceOnUse" spreadMethod="pad"/><filter id="b" x="-.018" y="-.018" width="1.037" height="1.036" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation=".669"/></filter></defs><ellipse ry="68.395" rx="67.204" cy="119.989" cx="83.344" opacity=".85" stroke="#cbd5e1" stroke-width="1.7" filter="url(#b)" transform="translate(-13.684 -49.138)"/><path d="M33.288 17.28H51.14v102.787a6.492 6.492 0 01-6.492 6.492H41.51a8.223 8.223 0 01-8.222-8.223z" fill="#93c5fd"/><path transform="matrix(.90398 -.80901 .79289 .92256 -76.76 16.816)" d="M54.75 112.168h1.915a3.58 3.58 45 013.58 3.58v46.185a3.252 3.252 135 01-3.251 3.251H55.17a3.58 3.58 45 01-3.58-3.58V115.33a3.16 3.16 135 013.16-3.16z" fill="url(#c)" stroke="#818cf8" stroke-width="1.235" stroke-opacity=".804"/><path d="M58.696 17.18v25.58c-.075.685-.031-6.767-.055-6.078.024.685-.02 9.508.055 10.19v.688h.05c2.823 14.95 14.128 23.554 28.432 23.584 15.397 0 27.13-11.065 27.13-26.328v-.006c-.021-15.06-12.2-27.331-27.39-27.596v-.035h-.028z" fill="#cbd5e1"/></svg>
        </div>
    );
}
