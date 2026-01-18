import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mabusubhanishaik566@gmail.com",
      href: "mailto:mabusubhanishaik566@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9618423849",
      href: "tel:+919618423849",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Guntur, Andhra Pradesh, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Mabusubhani786",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/mabusubhani-shaik-839b561b1",
      label: "LinkedIn",
    },
    // {
    //   icon: <Twitter className="w-5 h-5" />,
    //   href: "https://twitter.com",
    //   label: "Twitter",
    // },
  ];

  const validateForm = () => {
    const newErrors: any = {
      name: "",
      email: "",
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // const GOOGLE_SHEET_APP_URL =
  //   "https://script.google.com/macros/s/AKfycbzpM9-0S-Kr3jY9gqaEDBfafDa9hg-IiNZLCez3h8fXySdo34eFR2eHazIJBy4e3Aq-Eg/exec";

  const CONTACT_FORM_ENDPOINT = import.meta.env
    .VITE_GOOGLE_SHEET_APP_URL as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    if (!CONTACT_FORM_ENDPOINT) {
      throw new Error(
        "Google Sheet App URL is missing in environment variables",
      );
    }

    try {
      const timestamp = new Intl.DateTimeFormat("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());

      // Prepare URL-encoded payload
      const payload = new URLSearchParams({
        Name: formData.name,
        Email: formData.email,
        Message: formData.message || "",
        Timestamp: timestamp,
      }).toString();

      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
      });

      const text = await res.text();

      console.log(":::::text", text);

      toast({
        title: "Success",
        description: "MESSAGE RECEIVED SUCCESSFULLY",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="glass-card-hover p-8 gradient-border">
              <h3 className="text-xl font-semibold font-display mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start sm:items-center gap-3 sm:gap-4"
                  >
                    {/* Icon Container - Fixed size for all screens */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors block truncate sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium truncate sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card-hover p-8 gradient-border">
              <h3 className="text-xl font-semibold font-display mb-6">
                Send Message
              </h3>

              <form className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium text-sm">
                    Your Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`
        w-full rounded-xl
        bg-white/5 backdrop-blur-sm
        border border-white/10
        text-foreground
        placeholder:text-muted-foreground/70
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        transition-all duration-200
        ${errors.name ? "border-red-500 focus:ring-red-500" : ""}
        ${
          isSubmitting
            ? "opacity-60 cursor-not-allowed"
            : "hover:border-white/20"
        }
      `}
                    style={{
                      height: "48px",
                      fontSize: "14px",
                      padding: "0 16px",
                    }}
                  />

                  {errors.name && (
                    <p
                      className="mt-1 text-red-500"
                      style={{ fontSize: "11px" }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium text-sm">
                    Your Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`
        w-full rounded-xl
        bg-white/5 backdrop-blur-sm
        border border-white/10
        text-foreground
        placeholder:text-muted-foreground/70
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        transition-all duration-200
        ${errors.email ? "border-red-500 focus:ring-red-500" : ""}
        ${
          isSubmitting
            ? "opacity-60 cursor-not-allowed"
            : "hover:border-white/20"
        }
      `}
                    style={{
                      height: "48px",
                      fontSize: "14px",
                      padding: "0 16px",
                    }}
                  />

                  {errors.email && (
                    <p
                      className="mt-1 text-red-500"
                      style={{ fontSize: "11px" }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-medium text-sm"
                  >
                    Your Message (optional)
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="What would you like to discuss?"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={5}
                    className={`
        w-full rounded-xl resize-none
        bg-white/5 backdrop-blur-sm
        border border-white/10
        text-foreground
        placeholder:text-muted-foreground/70
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        transition-all duration-200
        ${errors.message ? "border-red-500 focus:ring-red-500" : ""}
        ${
          isSubmitting
            ? "opacity-60 cursor-not-allowed"
            : "hover:border-white/20"
        }
      `}
                    style={{
                      fontSize: "14px",
                      padding: "12px 16px",
                      minHeight: "120px",
                    }}
                  />

                  {errors.message && (
                    <p
                      className="mt-1 text-red-500"
                      style={{ fontSize: "11px" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className={`
    w-full rounded-xl
    bg-transparent
    border border-primary/30
    flex items-center justify-center
    transition-all duration-300
    hover:border-primary
    hover:shadow-lg hover:shadow-primary/20
    active:scale-[0.98]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100
    group relative z-10
  `}
                  style={{
                    height: "52px",
                    padding: "0 24px",
                    fontSize: "14px",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin text-primary" />
                      <span className="gradient-text">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="gradient-text font-medium">
                        Send Message
                      </span>
                      <Send className="ml-2 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Form Note */}
                <p
                  className="text-muted-foreground text-center"
                  style={{ fontSize: "10px" }}
                >
                  * Required fields. I typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
