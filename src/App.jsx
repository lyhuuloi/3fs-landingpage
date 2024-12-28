import MobileMenu from './components/MobileMenu'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow fixed w-full z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-[#29ABE2]">3FS Solutions</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Trang chủ
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Dịch vụ
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Dự án
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Blog
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Liên hệ
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-[#29ABE2] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1E95C9] transition-colors">
                Yêu cầu báo giá
              </button>
            </div>
            <MobileMenu />
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Chúng tôi giúp bạn hiện thực hóa ý tưởng
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Cung cấp giải pháp phần mềm tùy chỉnh, nhanh chóng và hiệu quả
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-[#29ABE2] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#1E95C9] transition-colors">
                  Xem dịch vụ
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
                  Liên hệ ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dịch Vụ Của Chúng Tôi
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Chúng tôi cung cấp các giải pháp công nghệ toàn diện cho doanh nghiệp của bạn
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Web Development',
                'Mobile Apps',
                'Cloud Solutions',
                'AI & Machine Learning',
                'DevOps Services',
                'IT Consulting'
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-4 text-[#29ABE2]">{service}</h3>
                  <p className="text-gray-600">
                    Providing professional {service.toLowerCase()} services with modern technologies and best practices.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">3F Solutions Co., Ltd.</h3>
              <p className="text-gray-400">
                Cung cấp giải pháp phần mềm tùy chỉnh, nhanh chóng và hiệu quả
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@3fs.vn</li>
                <li>Phone: +84 xxx xxx xxx</li>
                <li>Website: 3fs.vn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} 3F Solutions Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
