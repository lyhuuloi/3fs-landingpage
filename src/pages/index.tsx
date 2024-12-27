import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow fixed w-full z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.svg"
                  alt="3FS Solutions"
                  width={120}
                  height={40}
                  priority
                />
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
              <button className="bg-[#29ABE2] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1E95C9]">
                Yêu cầu báo giá
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Hero />
        <Services />
        <Projects />
      </main>
    </div>
  )
}
