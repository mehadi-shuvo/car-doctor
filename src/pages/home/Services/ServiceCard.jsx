
const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card">
            <figure className="px-10 pt-10">
                <img src={img} className="rounded-xl h-[208px]" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl text-[#444444] font-bold">{title}</h2>
                <div className="text-[#FF3811] flex justify-between">
                    <p className="font-semibold text-2xl">Price: ${price}</p>
                    <button className="font-normal text-lg underline">More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;