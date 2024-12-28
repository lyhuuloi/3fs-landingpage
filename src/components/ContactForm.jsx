import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Vui lòng nhập họ tên'
    if (!formData.email) newErrors.email = 'Vui lòng nhập email'
    if (!formData.phone) newErrors.phone = 'Vui lòng nhập số điện thoại'
    if (!formData.message) newErrors.message = 'Vui lòng nhập nội dung'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 3000)
    }
  }

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Họ và tên *</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Số điện thoại *</label>
                <input
                  type="tel"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Dịch vụ quan tâm</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Apps</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="ai">AI & Machine Learning</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Nội dung *</label>
              <textarea
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md transition-all flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#29ABE2] hover:bg-[#1E95C9]'
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang gửi...
                  </span>
                ) : (
                  'Gửi yêu cầu'
                )}
              </button>
            </div>

            {submitStatus && (
              <div className={`mt-4 p-4 rounded-md ${
                submitStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus === 'success'
                  ? 'Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.'
                  : 'Có lỗi xảy ra. Vui lòng thử lại sau.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
