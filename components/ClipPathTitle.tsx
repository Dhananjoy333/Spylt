type Props = {
    title : string,
    color : string,
    bg : string,
    className: string,
    borderColor: string
}

function ClipPathTitle({title, color, bg, className, borderColor}:Props) {
  return (
    <div className="general-title">
        <div style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            borderColor: borderColor
        }} className={`${className} border-[.5vw] text-nowrap opacity-0`}>
            <div className="md:px-14 px-3 pb-5 md:pt-0 pt-3" style={{
                backgroundColor: bg
            }}>
                <h2 style={{
                    color: color
                }} className="">{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default ClipPathTitle