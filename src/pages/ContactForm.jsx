import { GiLaserPrecision } from 'react-icons/gi';

export const ContactForm = () => (
    <div className="flex flex-col items-center min-h-screen">
      {/* Title Section */}
      <div className="flex flex-col items-center p-8">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-600 flex items-center gap-2">
          <GiLaserPrecision className="text-red-400" />
          Order Form
        </h1>
        <h2 className="text-lg font-light">Let me know what you want to create</h2>
      </div>

      {/* Form Section */}
      <form className="flex flex-col w-full max-w-lg p-4 items-start gap-3" noValidate>
        {/* Name Input Fields */}
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-1/2">
            <label htmlFor="fname" className="text-neutral-600">First Name</label>
            <input
                id="fname"
                className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
                type="text"
                placeholder="John"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="lname" className="text-neutral-600">Last Name</label>
            <input
                id="lname"
                className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
                type="text"
                placeholder="Doe"
            />
          </div>
        </div>

        {/* Email Input Field */}
        <div className="flex flex-col w-full">
          <label htmlFor="user-email" className="text-neutral-600">Email</label>
          <input
              id="user-email"
              className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100"
              type="email" // Changed to 'email' type for proper validation
              placeholder="johndoe2022@gmail.com"
          />
        </div>

        {/* Phone Number Input Field */}
        <div className="flex flex-col w-full">
          <label htmlFor="user-phone" className="text-neutral-600">Phone Number</label>
          <input
              id="user-phone"
              className="shadow rounded-lg border-slate-300 h-12 p-2 bg-neutral-100 placeholder:italic"
              type="tel" // Changed to 'tel' type for proper validation
              placeholder="(###) ###-####"
          />
        </div>

        {/* Description Textarea */}
        <div className="flex flex-col w-full">
          <label htmlFor="order-description" className="text-neutral-600">Describe It</label>
          <textarea
              id="order-description"
              className="shadow rounded-lg border-slate-300 bg-neutral-100 p-1.5"
              rows="5" // Adjusted for better default size
              placeholder="Provide a detailed description..."
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full rounded-lg bg-neutral-800 py-1 text-lg font-light text-neutral-300">
          Submit
        </button>
      </form>
    </div>
);

