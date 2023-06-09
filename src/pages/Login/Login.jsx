import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)

    const handelLogin = e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then(result=>{
                const LoggedUser = result.user;
                console.log(LoggedUser);
            })
            .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body p-10 border rounded-lg">
                        <h1 className="font-semibold text-4xl text-[#444444] text-center">Login</h1>
                        <form onSubmit={handelLogin}>
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
                                <button type='submit' className="btn bg-[#FF3811] font-bold text-xl border-none">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className='text-lg text-[#737373]'>New to Car Doctor? <Link to='/signup' className='font-semibold text-[#FF3811] '>Sing Up</Link></p>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;