export default function Work(props) {
    const {work} = props
    return (
        <div>
            <div className="columns-1 md:columns-1">
                {work.map((workname) =>
                    <div key={workname?.id}>
                        <div className="p-[20px] mt-[20px] mb-[20px] pt-[20px] pb-[20px] border-solid border-1 shadow bg-white">
                            <h1 className="font-medium tracking-wide text-[22px] text-[#6A6A6A]">{workname?.name}</h1>
                            <h3 className="tracking-wide pt-[10px] text-[18px] text-black">{workname?.designation}</h3>
                            <h3 className="tracking-wide pt-[10px] text-[18px] text-black">{workname?.from} - {workname?.to}</h3>
                            <h3 className="tracking-wide pt-[10px] text-[18px] text-black">{workname?.description}</h3>
                        </div>
                    </div>
                )}   
            </div>
        </div>
        
    )
}
