import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingItems from "./BookingItems";
import Swal from "sweetalert2";


const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:3000/booking?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    })

    const handelDelete = id =>{
        const prosed = confirm("Do you want delete this item?")
        if(prosed){
            fetch(`http://localhost:3000/booking/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: 'Deleted successfully',
                        icon: 'error',
                      })
                }
            })
        }
    }

    const handelBookingConfirm = id =>{
            fetch(`http://localhost:3000/booking/${id}`,{
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status:'confirm'})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount>0){
                    const remaining = bookings.filter(booking=> booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    const New = [updated,...remaining];
                    setBookings(New);
                }
            })
        
    }
    return (
        <div className="w-4/5 mx-auto">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(book => <BookingItems
                                key={book._id}
                                book={book}
                                handelDelete={handelDelete}
                                handelBookingConfirm={handelBookingConfirm}
                            ></BookingItems>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBooking;