

const PremiumQualityIcon = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496.004 496.004"
          fill="currentColor"   // Tailwind এর color কাজ করবে
          className="w-full h-full"
        >
          <path d="M493.661,178.346l-80-80c-1.151-1.148-2.624-1.918-4.224-2.208l-88-16c-4.347-0.791-8.512,2.092-9.303,6.439 ..."></path>
          <rect x="32.005" y="320.002" width="192" height="16"></rect>
          <rect x="32.005" y="384.002" width="184" height="16"></rect>
          <rect x="32.005" y="448.002" width="184" height="16"></rect>
        </svg>
      </div>
      <h3 className="mt-3 font-bold">Premium Quality</h3>
    </div>
  )
}

export default PremiumQualityIcon