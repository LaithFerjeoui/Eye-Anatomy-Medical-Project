import logo from "../../public/logo.png"
const navigation = {
    main: [
      { name: 'Anatomie', href: '#' },
      { name: 'Techniques d\'Imagerie', href: '#' },
      { name: 'Applications Cliniques', href: '#' },
     
    ],
    
  }  
  export default function Footer() {
    return (
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 columns-2 flex flex-col justify-center items-center sm:flex sm:flex-row sm:justify-center sm:space-x-12 " aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} className="text-sm leading-6 text-gray-500 hover:text-gray-200">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 w-14 flex mx-auto ">
           <img src={logo} alt="" className="rounded-lg" />
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Thése , Inc. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  