export default function Video () {
return (
    <div className=" py-12 px-12 bg-white h-[78rem] flex flex-col items-center">
    <div className=" an-test2 w-full 3xl:w-[120rem] flex flex-row justify-between ">
        <div className="text-8xl font-bold">Mac</div>
        <div className=" text-4xl "><p>你想的出，</p><p>Mac助你做得到。</p></div>
    </div>
    <div className="mt-16 3xl:w-[120rem] 3xl:h-[47rem] rounded-[3rem] overflow-hidden ">
        <video loop autoPlay muted className="  w-full 2xl:-translate-y-[22rem]" src="/mac.mp4"></video>
    </div>
</div>
)
}