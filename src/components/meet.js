import React from 'react'

export default function Meet() {
  return (
    <div className='min-h-screen overlapping-section-3 w-full flex py-20 my-20'>

    <section className=" w-full min-h-screen   px-6 md:px-12 xl:px-32">
            <h2 className="text-4xl font-bold md:text-6xl sm:text-5xl  max-w-l uppercase text-center mb-24 ">Meet our Team</h2>
        <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="text-center">
                <img className="w-64 h-64  mx-auto border-[5px] rounded-full object-cover  md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="./organizer_1.jpg" loading="lazy" width="800" height="1000" />
                <div>
                    <h4 className="font-semibold text-2xl ">Rohit Shukla</h4>
                    <span className="font-[400] block text-sm text-gray-500">Organizer</span>
                    <span className="font-[200] text-gray-500 text-sm"> +91 9316331662 </span>
                </div>
            </div>
            <div className=" text-center">
            <img className="w-64 h-64  mx-auto border-[5px] rounded-full object-cover  md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="./organizer_2.jpg" loading="lazy" width="800" height="1000" />
                <div>
                    <h4 className="font-semibold text-2xl">Pratham Chellani</h4>
                    <span className="font-[400] block text-sm text-gray-500">Organizer</span>
                    <span className="font-[200] text-gray-500 text-sm"> +91 9664590100 </span>
                </div>
            </div>
            <div className=" text-center">
            <img className="w-64 h-64  mx-auto border-[5px] rounded-full object-cover  md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="./organizer_.jpg" loading="lazy" width="800" height="1000" />
                <div>
                    <h4 className="font-semibold text-2xl">Muhammadumar Shaikh</h4>
                    <span className="font-[400] block text-sm text-gray-500 ">Organzier</span>
                    <span className="font-[200] text-gray-500 text-sm"> +91 9313190969 </span>
                </div>
            </div>
        </div>
    </section>

    </div>
    
  )
}
