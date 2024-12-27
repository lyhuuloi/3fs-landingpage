import { FaCode, FaMobile, FaRobot, FaCloud, FaChartLine, FaShieldAlt } from 'react-icons/fa'

const services = [
  {
    icon: FaCode,
    title: "Phát triển Web",
    description: "Xây dựng website chuyên nghiệp, tối ưu SEO và trải nghiệm người dùng"
  },
  {
    icon: FaMobile,
    title: "Ứng dụng Di động",
    description: "Phát triển ứng dụng di động đa nền tảng iOS và Android"
  },
  {
    icon: FaRobot,
    title: "AI & Machine Learning",
    description: "Giải pháp trí tuệ nhân tạo và học máy tiên tiến"
  },
  {
    icon: FaCloud,
    title: "Điện toán Đám mây",
    description: "Tư vấn và triển khai giải pháp đám mây"
  },
  {
    icon: FaChartLine,
    title: "Tư vấn Công nghệ",
    description: "Định hướng và tư vấn chiến lược công nghệ"
  },
  {
    icon: FaShieldAlt,
    title: "Bảo mật",
    description: "Giải pháp bảo mật toàn diện cho doanh nghiệp"
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
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
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
