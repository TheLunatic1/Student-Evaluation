import { useEffect } from 'react'

export default function Toast() {
  useEffect(() => {
    const toast = document.getElementById('toast')
    if (toast) {
      toast.classList.remove('translate-y-20')
      setTimeout(() => toast.classList.add('translate-y-20'), 3000)
    }
  }, [])

  return (
    <div
      id="toast"
      className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-20 transition-transform duration-300 z-50"
    >
      Notification
    </div>
  )
}