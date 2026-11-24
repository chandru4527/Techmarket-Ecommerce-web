import React from "react";
import { motion } from "motion/react";

// icons
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdArrowForward, } from "react-icons/md";

// components
import Button from "../../components/Button";
import Input from "../../components/forms/Input";
import Textarea from "../../components/forms/Textarea";

const Contact = () => {

  const contactDetails = [
    {
      icon: MdPhone,
      title: "Phone",
      value: "+91 98765 43210",
      desc: "Mon - Sat, 9:00 AM - 6:00 PM",
    },
    {
      icon: MdEmail,
      title: "Email",
      value: "support@techmarket.com",
      desc: "We're always happy to help.",
    },
    {
      icon: MdLocationOn,
      title: "Our Location",
      value: "Tamil Nadu, India",
      desc: "Get in touch with our team.",
    },
    {
      icon: MdAccessTime,
      title: "Working Hours",
      value: "Monday - Saturday",
      desc: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="space-y-5">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >

        <h1 className="mt-5 text-3xl font-bold text-[#061336] md:text-5xl">
          Get in Touch
          <span className="block text-[#015BFA]">
            We'd Love to Hear From You
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
          Have questions about our products or need assistance with
          your orders? Our team is always ready to help you.
        </p>
      </motion.div>

      <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left Section - Map & Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >

          {/* Map Heading */}
          <h2 className="mb-5 text-2xl font-bold text-[#061336]">
            Find Us Here
          </h2>

          {/* Google Map */}
          <div className="overflow-hidden bg-gray-50">
            <iframe
              title="TechMarket Location"
              src="https://maps.google.com/maps?q=Tamil%20Nadu%2C%20India&t=&z=7&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="370"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Information */}
          <div className="mt-8 flex-1">

            <h2 className="mt-4 text-2xl font-bold text-[#061336]">
              Get in Touch With Us
            </h2>

            <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 pt-1 text-[#015BFA]">
                    <item.icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#061336]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#015BFA]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="mb-5">
            <h2 className=" text-2xl font-bold text-[#061336]">
              Leave Us a Message
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Fill out the form below and we'll get back to you
              as soon as possible.
            </p>
          </div>

          <form className="space-y-5">

            <Input
              label="Name"
              type="text"
              placeholder="Enter your full name"
            />

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">

              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
              />

              <Input
                label="Phone"
                type="tel"
                placeholder="Enter phone number"
              />
            </div>

            <Input
              label="Subject"
              type="text"
              placeholder="Enter message subject"
            />

            <Textarea
              label="Message"
              placeholder="Type here..."
              rows={6}
            />

            <Button
              type="submit"
              variant="primary"
              icon={MdArrowForward}
              iconPosition="end"
              text="Send Message"
              className="flex items-center gap-3 py-3"
            />

          </form>
        </motion.div>

      </div>

    </div>
  );
};

export default Contact;