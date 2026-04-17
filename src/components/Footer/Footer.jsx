import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#244d3f]'>

            <div className='w-11/12 mx-auto text-center pt-20 space-y-4'>
                <h1 className='text-white text-5xl font-bold'>Keenkeeper</h1>
                <p className='text-sm text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <h4 className='text-white font-medium text-xl'>Social Links</h4>
                <div className='flex justify-center items-center gap-3'>

                    <div className='bg-white p-3 rounded-full'><IoLogoInstagram /></div>
                    <div className='bg-white p-3 rounded-full'><FaFacebookSquare /></div>
                    <div className='bg-white p-3 rounded-full'><FaXTwitter /></div>
                    
                </div>

                <div className='border-t border-amber-50/15 flex flex-col lg:flex-row justify-between items-center gap-3 py-7 mt-10'>

                    <span className='text-[#fafafa50]'>© 2026 KeenKeeper. All rights reserved.</span>
                    <div className='space-x-3'>
                        <NavLink> <span className='text-[#fafafa50]'>Privacy Policy</span></NavLink>
                        <NavLink> <span className='text-[#fafafa50]'>Terms of Service</span></NavLink>
                        <NavLink> <span className='text-[#fafafa50]'>Cookies</span></NavLink>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Footer;