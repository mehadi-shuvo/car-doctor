import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/services')
            .then(res=> res.json())
            .then(data=> setServices(data))
    },[])
    return (
        <div className="w-4/5 mx-auto mb-20">
            <div className="text-center font-bold space-y-5">
                <h1 className="text-xl text-[#FF3811]">Service</h1>
                <h5 className="text-5xl text-[#151515]">Our Service Area</h5>
                <p className='text-base font-normal text-[#737373] md:w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;