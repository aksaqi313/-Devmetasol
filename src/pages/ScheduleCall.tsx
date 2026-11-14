import { useState } from "react";
import SEO from "../components/SEO";

const ScheduleCall = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Date, 2: Time, 3: Form
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Available time slots
  const availableTimeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
  ];

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // Check if date is available (not in past and not weekends)
  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    
    if (checkDate < today) return false;
    
    const dayOfWeek = checkDate.getDay();
    // Available Monday to Friday
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (date: Date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
      setStep(2);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();
  const isCurrentMonth =
    currentMonth.getMonth() === today.getMonth() &&
    currentMonth.getFullYear() === today.getFullYear();

  return (
    <>
      <SEO
        title="Schedule a Call - Book a Consultation"
        description="Schedule a free consultation call with Devmetasol's experts. Discuss your software development, digital transformation, or IT consulting needs with our team."
        keywords="schedule call, book consultation, free consultation, Devmetasol consultation, software development meeting, IT consulting call"
        canonicalUrl="/schedule-call"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Schedule Call', url: '/schedule-call' }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl sm:text-2xl">D</span>
            </div>
            <span className="text-blue-600 font-bold text-xl sm:text-2xl">
              Devmetasol
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Schedule Your Free Consultation
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative digital solutions.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full font-bold text-sm sm:text-base transition-all ${
                  step >= stepNum
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  {step > stepNum ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </div>
                {stepNum < 3 && (
                  <div className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 transition-all ${
                    step > stepNum ? "bg-blue-600" : "bg-gray-200"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 sm:gap-16 mt-4">
            <span className={`text-xs sm:text-sm font-medium ${step >= 1 ? "text-blue-600" : "text-gray-400"}`}>
              Select Date
            </span>
            <span className={`text-xs sm:text-sm font-medium ${step >= 2 ? "text-blue-600" : "text-gray-400"}`}>
              Choose Time
            </span>
            <span className={`text-xs sm:text-sm font-medium ${step >= 3 ? "text-blue-600" : "text-gray-400"}`}>
              Your Details
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Select a Date
              </h2>
              
              {/* Calendar */}
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-xs sm:text-sm font-semibold text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {days.map((date, index) => {
                    if (!date) {
                      return <div key={index} className="aspect-square"></div>;
                    }

                    const isAvailable = isDateAvailable(date);
                    const isSelected =
                      selectedDate &&
                      date.getDate() === selectedDate.getDate() &&
                      date.getMonth() === selectedDate.getMonth() &&
                      date.getFullYear() === selectedDate.getFullYear();
                    const isToday =
                      isCurrentMonth &&
                      date.getDate() === today.getDate() &&
                      date.getMonth() === today.getMonth();

                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(date)}
                        disabled={!isAvailable}
                        className={`aspect-square flex items-center justify-center rounded-lg text-sm sm:text-base font-medium transition-all ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-lg scale-105"
                            : isAvailable
                            ? "bg-blue-50 hover:bg-blue-100 text-gray-900 hover:scale-105"
                            : "bg-gray-100 text-gray-300 cursor-not-allowed"
                        } ${isToday && isAvailable && !isSelected ? "ring-2 ring-blue-400" : ""}`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && selectedDate && (
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedTime(null);
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">Back</span>
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Select a Time
                </h2>
                <div></div>
              </div>

              <div className="text-center mb-6">
                <p className="text-lg sm:text-xl text-gray-700 font-semibold">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {availableTimeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`py-3 px-4 rounded-xl font-medium text-sm sm:text-base transition-all ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-lg scale-105"
                          : "bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-400 text-gray-700 hover:scale-105"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Form */}
          {step === 3 && selectedDate && selectedTime && (
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <button
                  onClick={() => {
                    setStep(2);
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">Back</span>
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Enter Your Details
                </h2>
                <div></div>
              </div>

              {/* Selected Date & Time Display */}
              <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                    Please share anything that will help prepare for our meeting. <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project, challenges, or what you'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Schedule Event
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowConfirmation(false)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 transform animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Meeting Scheduled Successfully!
              </h2>
              
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-left">
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-700"><strong>Name:</strong> {formData.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700"><strong>Email:</strong> {formData.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Date & Time:</strong> {selectedDate?.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })} at {selectedTime}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                We've sent a confirmation email to <strong>{formData.email}</strong> with meeting details. 
                Our team will contact you shortly to confirm the meeting.
              </p>

              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setStep(1);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Another Meeting
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
      </div>
    </>
  );
};

export default ScheduleCall;
