import React from "react";

export default function ContactPage() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">

        {/* Contact Info */}
        <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
          <div className="text-center lg:text-left">
          <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">Contact Us</h1>
          <p className="text-muted-foreground mt-8">
            We are available for questions, feedback, or collaboration
            opportunities. Let us know how we can help!
          </p>
          </div>
        <div className="mx-auto w-fit my-12 lg:mx-0">
          <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left"> Contact Details</h3>
          <ul className="ml-4 list-disc">
            <li>
              <span className="font-bold">Phone: </span>
              "(123) 34567890"
              </li>
            <li>
              <span className="font-bold">Email: </span>
              <a href="mailto:email@example.com" className="underline">email@example.com</a>
            </li>
            <li>
              <span className="font-bold">Address: </span>
              Whats the Weather SML
              Madison Av 5, Building 3, Floor 4
              46012, Valencia, Spain
              </li>
          </ul>
        </div>
                </div>

            {/* Contact Form to Fill */}
            <div className="container mx-auto px-4 py-16 mt-12 relative z-10 p-6"></div>
            </div>
        </div>
    </section>
  );
}
