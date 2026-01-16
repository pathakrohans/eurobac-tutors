'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full px-0 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-black pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pb-6 text-gray-600 leading-relaxed">
              {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

