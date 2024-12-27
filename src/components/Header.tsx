import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/" className="nav-link">
              Trang chủ
            </Link>
            <Link href="/services" className="nav-link">
              Dịch vụ
            </Link>
            <Link href="/projects" className="nav-link">
              Dự án
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Liên hệ
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              onClick={() => router.push('/contact')}
            >
              Yêu cầu báo giá
            </button>
            <select
              onChange={(e) => router.push(router.pathname, router.pathname, { locale: e.target.value })}
              value={router.locale}
              className="ml-4 border-gray-300 rounded-md"
            >
              <option value="vi">VN</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  )
}
