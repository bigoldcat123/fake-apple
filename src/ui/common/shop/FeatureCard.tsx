
export default function FeatureCard({  heightClass, widthClass,children }: {
    heightClass: string,
    widthClass: string,
    children:React.ReactNode
}) {

    return (
        <div className=" cursor-pointer snap-center snap-always flex-shrink-0 flex items-center">
            <div className={`${heightClass}  w-full`}>
                <div className={`${widthClass} text-xl bg-white font-bold shadow-md  hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out  space-y-2 h-full  bg-cover rounded-3xl p-8`} >
                    {children}
                </div>
            </div>
        </div>

    )
}