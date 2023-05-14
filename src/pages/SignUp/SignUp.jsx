import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
   const {createUser} = useContext(AuthContext)

    const handelSignUp = e=>{
        e.preventDefault();
        const form = e.target;
        //const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        createUser(email, password)
            .then(result=>{
                const NewUser = result.user;
                console.log(NewUser);
            })
            .catch(error=>console.log(error))
    }
    return (
        <div className="hero">
            <div className="hero-content grid md:grid-cols-2">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card">
                    <div className="card-body p-10 border rounded-lg">
                        <h1 className="font-semibold text-4xl text-[#444444] text-center">Sign Up</h1>
                        <form onSubmit={handelSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-[#444444]">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-[#444444]">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg text-[#444444]">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] font-bold text-xl border-none">Sign Up</button>
                            </div>
                        </form>
                        <div>
                            <p className='text-lg text-[#737373]'>Already have an account? <Link to='/login' className='font-semibold text-[#FF3811] '>Login</Link></p>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;