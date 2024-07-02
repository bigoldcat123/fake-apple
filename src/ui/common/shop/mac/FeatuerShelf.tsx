export default function FeatureShelf({ children, childrenHeight }: {
    children: React.ReactNode,
    childrenHeight: string // 0rem
}) {

    return (
        <>
            <div >
                <div className=" px-12">
                    title
                </div>
                <div className={`overflow-hidden my-12`} style={{ height: childrenHeight }}>
                    <div className=" flex space-x-2 overflow-auto">
                        <div className="min-w-12"></div>
                        {children}
                    </div>
                </div>
                <div>
                    <button>left </button>
                    <button> right</button>
                </div>

            </div>

        </>
    )
}