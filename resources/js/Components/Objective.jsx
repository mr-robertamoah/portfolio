export default function Objective({ className = '', objective }) {

    return (
        <div className={`relative w-fit ${className}`}>
            <div className="p-2 bg-white">{objective}</div>
            <div className="w-full h-1 bg-gradient-to-r absolute top-0 from-slate-700 to-pink-500"></div>
            <div className="w-full h-1 bg-gradient-to-r absolute bottom-0 from-pink-700 to-slate-500"></div>
            <div className="w-1 h-full bg-gradient-to-r absolute  top-0 right-0 from-pink-700 to-slate-500"></div>
            <div className="w-1 h-full bg-gradient-to-r absolute  top-0 legt-0 from-pink-700 to-slate-500"></div>
        </div>
    )
}