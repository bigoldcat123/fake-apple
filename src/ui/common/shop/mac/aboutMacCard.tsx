export default function AboutMacCard({information}: {
    information: {
        title:string,
        message:string[],
        img:string,
        color:string
    }
}) {

    return (
        <div className=" snap-always snap-center hover:scale-[1.01] transition-all duration-300 ease-in-out bg-cover w-[25.3125rem] h-[46.75rem] flex-shrink-0 rounded-3xl bg-slate-500 p-8 space-y-2"
         style={{backgroundImage: `url(${information.img})`,color:information.color}}>
            <p className=" font-bold">{information.title}</p>
            <div className=" font-bold text-2xl">
                {information.message.map((x,i) => {
                    return <p key={i}>{x}</p>
                })}
            </div>
        </div>
    )
}