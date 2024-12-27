import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {process.env.COMPANY_SHORT_NAME} - Chúng tôi giúp bạn hiện thực hóa ý tưởng
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Cung cấp giải pháp phần mềm tùy chỉnh, nhanh chóng và hiệu quả
          </p>
          <div className="flex gap-4">
            <button className="bg-[#29ABE2] hover:bg-[#1E95C9] text-white px-8 py-3 rounded-md text-lg font-medium">
              Xem Dịch Vụ
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#29ABE2] px-8 py-3 rounded-md text-lg font-medium">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
