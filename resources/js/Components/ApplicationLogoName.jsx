import React from "react";

export default function ApplicationLogo({ className = '' }) {
    return (
        <div className={className}>
            <svg className="w-full h-full" viewBox="0 0 100.703 109.38" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a"><stop offset="0" stopColor="#93c5fd"/><stop offset="1" stopColor="#2860e8" stopOpacity="0"/></linearGradient><linearGradient xlinkHref="#a" id="c" x1="55.431" y1="148.609" x2="57.961" y2="167.679" gradientUnits="userSpaceOnUse" spreadMethod="pad"/><filter id="b" x="-.018" y="-.018" width="1.037" height="1.036" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation=".669"/></filter></defs><path d="M0 .101h17.852v102.787a6.492 6.492 0 01-6.491 6.492H8.223A8.223 8.223 0 010 101.157z" fill="#93c5fd"/><path transform="matrix(.90398 -.80901 .79289 .92256 -110.048 -.363)" d="M54.75 112.168h1.915a3.58 3.58 45 013.58 3.58v46.185a3.252 3.252 135 01-3.251 3.251H55.17a3.58 3.58 45 01-3.58-3.58V115.33a3.16 3.16 135 013.16-3.16z" fill="url(#c)" stroke="#818cf8" strokeWidth="1.235" strokeOpacity=".804"/><path d="M25.409 0v25.58c-.076.685-.032-6.766-.055-6.078.023.686-.02 9.51.055 10.191v.688h.05C28.28 45.33 39.586 53.935 53.89 53.965c15.397 0 27.13-11.065 27.13-26.328v-.007C81 12.57 68.82.3 53.63.035V0h-.027z" fill="#cbd5e1"/><text style={{ lineHeight:0, 'InkscapeFontSpecification':'Ink Free'}} x="94.853" y="133.879" fontSize="14.111" fontFamily="Ink Free" letterSpacing="1.323" opacity=".85" fill="#93c5fd" stroke="#cbd5e1" strokeWidth="1.7" transform="translate(-46.971 -66.317)"><tspan style={{"InkscapeFontSpecification": 'Ink Free'}} x="94.853" y="133.879" fontWeight="400">OBERT</tspan></text></svg>
        </div>
    );
}
