import Image from 'next/image'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Nền tảng Thương mại Điện tử',
    description: 'Xây dựng hệ thống thương mại điện tử quy mô lớn',
    category: 'Web Development'
  },
  {
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8',
    title: 'Ứng dụng Giao đồ ăn',
    description: 'Ứng dụng di động đặt và giao đồ ăn',
    category: 'Mobile App'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: 'Hệ thống AI Dự báo',
    description: 'Giải pháp dự báo thông minh cho doanh nghiệp',
    category: 'AI Solution'
  }
]

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Dự Án Tiêu Biểu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những dự án thành công của chúng tôi
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-blue-400 font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm font-medium backdrop-blur-sm transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
