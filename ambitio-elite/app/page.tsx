"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Crown, Search, Menu, ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeRow, setActiveRow] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Images for the university rows
  const universityRows = ["/images/university-row1.png", "/images/university-row2.png", "/images/university-row3.png"]

  // Function to navigate between rows on mobile
  const navigateRow = (direction) => {
    if (direction === "next") {
      setActiveRow((prev) => (prev === universityRows.length - 1 ? 0 : prev + 1))
    } else {
      setActiveRow((prev) => (prev === 0 ? universityRows.length - 1 : prev - 1))
    }
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-red-600"
          >
            ambitio.
          </motion.h1>
          <nav className="ml-8 flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <button className="flex items-center space-x-1 px-2 py-1">
                <span>Bootcamps</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <button className="flex items-center space-x-1 px-2 py-1">
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="#" className="px-2 py-1">
                Ambitio Pro
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="#" className="px-2 py-1 font-medium text-red-600">
                Ambitio Elite
              </Link>
            </motion.div>
          </nav>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-red-600 text-red-600 rounded-full px-4 py-2 text-sm font-medium hover:bg-red-50 transition-colors"
        >
          Speak with our Experts
        </motion.button>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 border-b">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-xl font-bold text-red-600">ambitio.</span>
        </motion.div>
        <div className="flex items-center space-x-2">
          <motion.button
            initial={{ opacity: 0, width: "70%" }}
            animate={isLoaded ? { opacity: 1, width: "100%" } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-gray-300 rounded-full px-3 py-1 text-xs flex items-center"
          >
            <Search className="w-3 h-3 mr-1" />
            <span>Search in our expertise...</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={isLoaded ? { opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-1"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </header>

      {/* University Icons - Desktop */}
      <div className="hidden md:block px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full"
          >
            <div className="relative">
              <Image
                src="/images/university-row1.png"
                alt="University Icons Row 1"
                width={1200}
                height={100}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 flex">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={`row1-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="flex-1 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative">
              <Image
                src="/images/university-row2.png"
                alt="University Icons Row 2"
                width={1200}
                height={100}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={`row2-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="flex-1 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full"
          >
            <div className="relative">
              <Image
                src="/images/university-row3.png"
                alt="University Icons Row 3"
                width={1200}
                height={100}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={`row3-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="flex-1 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* University Icons - Mobile (Carousel) */}
      <div className="md:hidden px-4 py-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full relative"
        >
          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateRow("prev")}
              className="bg-white/80 rounded-full p-1 shadow-md"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateRow("next")}
              className="bg-white/80 rounded-full p-1 shadow-md"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>

          {/* Carousel container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeRow * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {universityRows.map((row, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={row || "/placeholder.svg"}
                    alt={`University Icons Row ${index + 1}`}
                    width={1200}
                    height={100}
                    className="w-full h-auto"
                    priority={index === 0}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-2 space-x-1">
            {universityRows.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveRow(index)}
                animate={{
                  scale: activeRow === index ? 1.2 : 1,
                  backgroundColor: activeRow === index ? "#dc2626" : "#e5e7eb",
                }}
                className={`w-2 h-2 rounded-full`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile User Profile */}
      <div className="md:hidden px-4 py-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
          className="bg-yellow-100 rounded-lg p-2 flex items-center"
        >
          <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden">
            <Image
              src={`/placeholder.svg?height=40&width=40`}
              alt="User profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="ml-2 font-medium">Adithya Challa</span>
        </motion.div>
      </div>

      {/* Crown Icon - Desktop */}
      <div className="hidden md:flex justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, type: "spring", stiffness: 100 }}
          className="absolute -top-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 rgba(220, 38, 38, 0.4)",
                "0 0 20px rgba(220, 38, 38, 0.6)",
                "0 0 0 rgba(220, 38, 38, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="w-16 h-16 rounded-full bg-red-600 bg-opacity-20 flex items-center justify-center"
          >
            <Crown className="w-8 h-8 text-red-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Crown Icon - Mobile */}
      <div className="md:hidden relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
          className="absolute right-12 top-[-60px]"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 rgba(220, 38, 38, 0.4)",
                "0 0 15px rgba(220, 38, 38, 0.6)",
                "0 0 0 rgba(220, 38, 38, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="w-12 h-12 rounded-full bg-red-600 bg-opacity-20 flex items-center justify-center"
          >
            <Crown className="w-6 h-6 text-red-600" />
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Section - Desktop */}
      <section className="hidden md:block text-center px-4 py-12 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-4xl font-bold mb-2"
        >
          Give the best shot <br />
          at your{" "}
          <motion.span
            initial={{ color: "#000" }}
            animate={{ color: "#dc2626" }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-red-600"
          >
            Dream University
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-gray-600 mb-6 max-w-2xl mx-auto"
        >
          Get expert help, personalised guidance, and all the support you need to increase your chances of success with
          Ambitio Elite.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white rounded-full px-6 py-3 font-medium transition-all"
        >
          10x your chances with Ambitio
        </motion.button>
      </section>

      {/* Hero Section - Mobile */}
      <section className="md:hidden text-left px-4 py-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-2xl font-bold mb-2"
        >
          Give the best shot at your <br />
          <motion.span
            initial={{ color: "#000" }}
            animate={{ color: "#dc2626" }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-red-600"
          >
            Dream University
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-gray-600 text-sm mb-4"
        >
          Get expert help, personalised guidance, and all the support you need to increase your chances of success with
          Ambitio Elite.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white rounded-full px-4 py-2 text-sm font-medium"
        >
          10x your chances with Ambitio
        </motion.button>
      </section>

      {/* Stats Section - Desktop */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="hidden md:block bg-red-50 rounded-lg p-8 max-w-4xl mx-auto my-8"
      >
        <div className="text-center mb-4">
          <p className="text-lg">
            We let <span className="text-red-600 font-medium">our numbers</span> do the talking
          </p>
          <p className="text-gray-600">Our users love us and we know you will too! Explore our products</p>
        </div>
        <div className="flex justify-center gap-16 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.7 }}
              className="text-4xl font-bold text-red-600"
            >
              <CountUp end={98.2} decimals={1} suffix="%" duration={2} />
            </motion.h2>
            <p className="text-sm text-gray-600">got into their Target Program</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-4xl font-bold text-red-600"
            >
              <CountUp end={4.96} decimals={2} duration={2} />
            </motion.h2>
            <p className="text-sm text-gray-600">Google Rating</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.9 }}
              className="text-4xl font-bold text-red-600"
            >
              <CountUp end={5000} prefix="+" duration={2} />
            </motion.h2>
            <p className="text-sm text-gray-600">Students Assisted</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section - Mobile */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="md:hidden bg-red-50 rounded-lg p-4 mx-4 my-6"
      >
        <div className="text-center mb-4">
          <p className="text-base">
            We let <span className="text-red-600 font-medium">our numbers</span> do the talking
          </p>
          <p className="text-xs text-gray-600">Our users love us and we know you will too! Explore our products</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-3xl font-bold text-red-600"
            >
              <CountUp end={4.96} decimals={2} duration={2} />
            </motion.h2>
            <p className="text-xs text-gray-600">Google Rating</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-3xl font-bold text-red-600"
            >
              <CountUp end={98.2} decimals={1} suffix="%" duration={2} />
            </motion.h2>
            <p className="text-xs text-gray-600">got into their Target Program</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-center col-span-2"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className="text-3xl font-bold text-red-600"
            >
              <CountUp end={30000} prefix="+" duration={2} />
            </motion.h2>
            <p className="text-xs text-gray-600">students Assisted</p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}

// CountUp component for animated number counting
function CountUp({ end, duration = 2, decimals = 0, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const startValue = 0
    const endValue = end

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = startValue + progress * (endValue - startValue)

      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(animateCount)
      }
    }

    window.requestAnimationFrame(animateCount)

    return () => {
      startTime = null
    }
  }, [end, duration])

  return (
    <>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </>
  )
}

