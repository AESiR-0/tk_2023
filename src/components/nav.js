

export default function Nav() {
  return (
    <>
      <nav className="flex bg-main items-center nav justify-center">
        <div className="flex items-center">
          <div className="flex gap-20">
            <a href="#" className="hover:shadow-md  font-bold text-xl mr-4">
              Events
            </a>
            <a href="#" className="hover:shadow-md  font-bold text-xl mr-4">
              Contact
            </a>
            <a href="#" className="hover:shadow-md  font-bold text-xl mr-4">
              About
            </a>
            <a href="" className="hover:shadow-md  font-bold text-xl mr-4">
              
                Register
          
            </a>
          </div>
        </div>
      </nav>
      <div className="hidden hamburger">
        <img
          height={50}
          width={50}
          className="ml-2 mt-3 invert grayscale hamburger"
          src="/menu.png"
          alt=""
        />
      </div>
    </>
  );
}
