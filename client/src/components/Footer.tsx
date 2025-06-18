const Footer = () => {
    const footerSections = [
      {
        title: "Company",
        links: ["About Us", "Careers", "Press", "Contact"]
      },
      {
        title: "Support", 
        links: ["Help Center", "Returns", "Shipping", "Size Guide"]
      },
      {
        title: "Account",
        links: ["Sign In", "Register", "Order Status", "Wishlist"]
      }
    ];
  
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OC</span>
                </div>
                <span className="text-xl font-bold">Office Care</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for all office needs.
              </p>
            </div>
            
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2025 Office Care. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  