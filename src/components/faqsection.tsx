import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = {
  kashmir: [
    {
      question: "Is it safe to travel to Kashmir right now?",
      answer:
        "Tourist areas like Srinagar, Gulmarg, Sonamarg, and Pahalgam are generally safe, but always check the latest travel advisories."
    },
    {
      question: "What is the best time to visit Kashmir?",
      answer:
        "Spring (Mar–May) for tulip gardens, Summer (Jun–Aug) for sightseeing and houseboats, and Winter (Dec–Feb) for snow activities in Gulmarg."
    },
    {
      question: "Which is better – Gulmarg or Pahalgam?",
      answer:
        "Gulmarg is known for skiing, snow, and Gondola rides, while Pahalgam is ideal for lush valleys, rivers, and trekking bases."
    },
    {
      question: "Do I need any permit to visit Kashmir?",
      answer:
        "No permits are needed for popular destinations. For border areas like Gurez Valley, local permits may be required."
    },
    {
      question: "How many days are enough for a Kashmir trip?",
      answer:
        "A 5–7 day trip is ideal to cover Srinagar, Gulmarg, Pahalgam, and Sonamarg at a relaxed pace."
    },
    {
      question: "Are houseboats on Dal Lake worth staying in?",
      answer:
        "Yes, houseboats offer a unique Kashmiri experience with Shikara rides and traditional hospitality."
    },
    {
      question: "What is the best time to visit Ladakh?",
      answer:
        "May to September is best, when Srinagar–Leh and Manali–Leh highways are open and the weather is pleasant."
    },
    {
      question: "Do I need a permit for Ladakh?",
      answer:
        "Yes, Inner Line Permits (ILP) are required for Nubra Valley, Pangong Lake, and Tso Moriri. Foreign nationals need a Protected Area Permit."
    },
    {
      question: "How do I reach Ladakh – flight or road trip?",
      answer:
        "By air: daily flights to Leh. By road: Srinagar–Leh Highway (May–Oct) or Manali–Leh Highway (Jun–Sep)."
    },
    {
      question: "Is altitude sickness a problem in Ladakh?",
      answer:
        "Yes. Leh is ~11,500 ft above sea level. Acclimatize for 1–2 days before traveling to higher regions like Nubra or Pangong."
    },
    {
      question: "What are the top tourist attractions in Jammu?",
      answer:
        "Vaishno Devi Temple, Raghunath Temple, Patnitop, Mansar Lake, Bhaderwah, and Shivkhori Cave are among the most popular."
    },
    {
      question: "How many days are enough for Ladakh?",
      answer:
        "7–8 days are recommended to comfortably explore Leh, Nubra Valley, Pangong Lake, and Tso Moriri."
    }
  ]
};

function FAQSection({ title, items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TravelFAQs() {
  return (
    <div className="bg-white py-10 md:py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <FAQSection title="Travel FAQs" items={faqs.kashmir} />
    </div>
  );
}
