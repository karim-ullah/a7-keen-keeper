import React from 'react';

const Heading = () => {
    return (
        <div className="text-center space-y-4">
        <h1 className="font-bold text-5xl text-[#1f2937]">Friends to keep close in your life</h1>
        <p className="text=[#64748B] text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">+ Add a friend</button>
      </div>
    );
};

export default Heading;