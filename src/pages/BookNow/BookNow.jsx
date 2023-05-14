import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';

const BookNow = () => {
    const service = useLoaderData();
    const { _id, title, price } = service;

    const handelBooking = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const message = form.message.value;
        const serviceId = _id;

        const bookingInfo = {
            name,email, date, message,price,title,serviceId
        }
        fetch('http://localhost:3000/booking', {
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
            
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    title: 'Booking successfully done',
                    text: `Your ${title} service will take over on ${JSON.stringify(date)} or we will update in your e-mail`,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (

        <div className="card-body p-14 w-4/5 mx-auto bg-[#F3F3F3] rounded-lg mb-20">
            <form onSubmit={handelBooking}>
                <p className='text-center text-3xl font-semibold text-[#737373] mb-5'>Booking for {title}</p>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <input type="text" placeholder="Name" name='name' className="input text-[#9ca3af]" />
                    </div>
                    <div className="form-control">
                        <input type="date" name='date'  className="input text-[#9ca3af]" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='price' readOnly defaultValue={"$"+price} className="input text-[#9ca3af]" />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Your Email" className="input text-[#9ca3af]" />
                    </div>
                </div>
                <div className="form-control">
                    <textarea placeholder='Your Message' name='message' className='input pl-4 mt-5 h-[200px]' cols="30" rows="10"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button type='submit' className="btn bg-[#ff3811] border-none">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default BookNow;