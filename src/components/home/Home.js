export default function Home(props) {
    const {objective , name , dob , email, mobile , designation , experience  , languages , skills} = props
    const skillname = Object.keys(skills)
    return (
        <div>
            <div className="columns-1 md:columns-1">
                <div className="p-[20px] mt-[20px] mb-[20px] pt-[20px] pb-[20px] border-solid border-1 shadow bg-white">
                    <h1 className="font-medium tracking-wide text-[22px] text-[#6A6A6A]">Career Objective :</h1>
                    <h3 className="tracking-wide pt-[10px] text-[18px] text-black">{objective}</h3>
                </div>    
            </div>
            <div className="columns-1 md:columns-1">
                <div className="p-[20px] pt-[20px] pb-[20px] border-solid border-1 shadow bg-white">
                    <h1 className="font-medium tracking-wide text-[22px] text-[#6A6A6A]">General Information :</h1>
                    <div className="lg:columns-2 md:columns-2 sm:columns-1 pb-[20px]">
                        <div className="">
                            <h3 className="font-bold tracking-wide pt-[15px] text-[18px] text-[#6A6A6A] ">Name : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black ">{name}</span></h3>
                            <h3 className="font-bold tracking-wide pt-[10px] text-[18px] text-[#6A6A6A] ">Date of Birth : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black ">{dob}</span></h3>
                            <h3 className="font-bold tracking-wide pt-[10px] text-[18px] text-[#6A6A6A] ">Email : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black ">{email}</span></h3>
                            <h3 className="font-bold tracking-wide pt-[10px] text-[18px] text-[#6A6A6A] ">Mobile : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black ">{mobile}</span></h3>
                        </div>
                        <div className="">
                            <h3 className="font-bold tracking-wide pt-[15px] text-[18px] text-[#6A6A6A] ">Designation : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black ">{designation}</span></h3>
                            <h3 className="font-bold tracking-wide pt-[10px] text-[18px] text-[#6A6A6A] ">Experience : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black ">{experience}</span></h3>
                            {/* <h3 className="font-bold tracking-wide pt-[10px] text-[18px] text-[#6A6A6A] ">Website : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black "><a href={website} target="_blank">Website</a></span></h3> */}
                            <h3 className="font-bold tracking-wide pt-[10px] text-[18px] text-[#6A6A6A] ">Languages : <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black ">{languages}</span></h3>
                        </div>
                    </div>
                    <hr className="border-solid"/>
                    <h1 className="font-medium tracking-wide pt-[15px] text-[22px] text-[#6A6A6A] ">Skills : </h1>
                    {skillname.map((skill) =>
                        <div key={skill}>
                            <h3 className="font-bold tracking-wide pt-[15px] pb-[10px] text-[18px] text-[#6A6A6A] ">{skill} <span className="font-medium tracking-wide pt-[5px] text-[18px] text-black "></span></h3>
                            <div className="h-8 bg-blue-600 text-lg font-lg text-blue-100 text-center p-1.5 leading-none rounded-full" style={{ width: skills[skill]*10 + '%' }}>{skills[skill]*10} %</div>
                        </div>
                    )}
                </div>  
            </div>
        </div>
        
    )
}
