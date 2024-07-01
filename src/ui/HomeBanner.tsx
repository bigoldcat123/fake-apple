export default function HomeBanner () {
    return (
        <div className=" absolute text-center left-1/2 -translate-x-1/2 top-[75%] space-y-3 ">
            <div className=" font-bold text-6xl">🍎Vision Pro</div>
            <div className="text-2xl">欢迎来到空间计算时代</div>
            <div className=" space-x-7">
                <button className=" py-2 px-4 rounded-full text-white  bg-blue-600 hover:bg-blue-500">进一步了解</button>
                <button className=" py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white  outline-blue-500 outline text-blue-500 outline-1">购买</button>
            </div>
        </div>
    )
}