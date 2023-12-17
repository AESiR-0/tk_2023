import React from 'react'

export default function Meet() {
  return (
    <section className='h-screen -mt-32'>
    <div className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-32 text-center">
            <h2 className=" text-center text-2xl text-gray-900 font-bold md:text-4xl">Meet our Team</h2>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4  text-center">
                <img className="w-64 h-64  mx-auto border-[5px] rounded-full object-cover  md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="./organizer_1.jpg" loading="lazy" width="800" height="1000" />
                <div>
                    <h4 className="font-semibold text-2xl ">Rohit Shukla</h4>
                    <span className="font-[400] block text-sm text-gray-500">Organizer</span>
                    <span className="font-[200] text-gray-500 text-sm"> +91 9316331662 </span>
                </div>
            </div>
            <div className="space-y-4   text-center">
            <img className="w-64 h-64  mx-auto border-[5px] rounded-full object-cover  md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="./organizer_2.jpg" loading="lazy" width="800" height="1000" />
                <div>
                    <h4 className="font-semibold text-2xl">Pratham Chellani</h4>
                    <span className="font-[400] block text-sm text-gray-500">Chief Technical Officer</span>
                    <span className="font-[200] text-gray-500 text-sm"> +91 9664590100 </span>
                </div>
            </div>
            <div className="space-y-4   text-center">
            <img className="w-64 h-64  mx-auto border-[5px] rounded-full object-cover  md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="./organizer_.jpg" loading="lazy" width="800" height="1000" />
                <div>
                    <h4 className="font-semibold text-2xl">Mohammed Umar</h4>
                    <span className="font-[400] block text-sm text-gray-500">Organzier</span>
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
    
  )
}
