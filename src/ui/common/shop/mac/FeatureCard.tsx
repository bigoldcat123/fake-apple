export default function FeatureCard({information}: {
    information:{
        image: string;
        title: string[];
        information: string;
    }
}) {

    return (
        <>
            <div className=" snap-always snap-center relative flex-shrink-0 w-[25rem] h-[17rem] p-8 space-y-4 rounded-3xl bg-white cursor-pointer  hover:scale-[1.03] transition-all duration-300 ease-in-out">
                <div>
                    <img className=" w-12 " src={information.image} alt="" />
                </div>
                <div className=" font-bold text-2xl">
                    {information.title.map((x,i) => {
                        return <p key={i}>{x}</p>
                    })}
                </div>
                <div className=" text-sm">
                    {information.information}
                </div>
                <div className=" absolute w-9 bg-slate-800 aspect-square rounded-full text-white text-center leading-9 text-xl right-4 bottom-4">+</div>
            </div>
        </>
    )
    }