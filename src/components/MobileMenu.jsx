import { useState, useEffect } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-bold text-[#29ABE2]">3FS Solutions</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-4">
                {['Trang chủ', 'Dịch vụ', 'Dự án', 'Blog', 'Liên hệ'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-lg font-medium text-gray-900 hover:text-[#29ABE2] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#29ABE2] text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-[#1E95C9] transition-colors"
              >
                Yêu cầu báo giá
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
