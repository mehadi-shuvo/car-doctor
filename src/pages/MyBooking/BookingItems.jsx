

const BookingItems = ({ book, handelDelete,handelBookingConfirm }) => {
    const {_id, title, email, date, img, status } = book
    return (
        <tr>
            <th>
                <button onClick={()=>handelDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td >
                <div className="flex items-center justify-start space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {img && <img src={img} alt="" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td className="text-center">
                {email}
            </td>
            <td className="text-center">{date}</td>
            <th className="text-center">
                {
                   status === 'confirm'? 
                   <span className="text-[#ff3811]">Confirmed</span>
                   :<button onClick={()=>handelBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button> 
                }
            </th>
        </tr>
    );
};

export default BookingItems;