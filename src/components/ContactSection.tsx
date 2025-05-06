import { useState, useEffect } from "react";
import { Mail, Send, Loader2 } from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [isVisible, setIsVisible] = useState(false);

  // Animate in on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormState("success");

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setFormState("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section className="tab-content relative flex h-full w-full flex-col overflow-auto py-8">
      <div className="mx-auto w-full max-w-2xl px-4">
        {/* Header with gradient title */}
        <div
          className={`mb-12 opacity-0 transform translate-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Have a project idea or job opportunity? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div
          className={`rounded-xl border border-border bg-background/70 backdrop-blur-sm p-6 shadow-xl opacity-0 transform translate-y-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formState !== "idle"}
                  className="w-full rounded-lg border border-border bg-background/30 px-4 py-2.5 focus:border-chart-2 focus:outline-none focus:ring-1 focus:ring-chart-2 disabled:opacity-70"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formState !== "idle"}
                  className="w-full rounded-lg border border-border bg-background/30 px-4 py-2.5 focus:border-chart-2 focus:outline-none focus:ring-1 focus:ring-chart-2 disabled:opacity-70"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={formState !== "idle"}
                className="w-full rounded-lg border border-border bg-background/30 px-4 py-2.5 focus:border-chart-2 focus:outline-none focus:ring-1 focus:ring-chart-2 disabled:opacity-70"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={formState !== "idle"}
                rows={6}
                className="w-full rounded-lg border border-border bg-background/30 px-4 py-2.5 focus:border-chart-2 focus:outline-none focus:ring-1 focus:ring-chart-2 disabled:opacity-70"
                placeholder="Hi Umit, I have a project idea..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={formState !== "idle"}
                className={`group relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-chart-2 px-6 py-3 text-primary-foreground shadow-md hover:bg-chart-2/90 disabled:opacity-70 md:w-auto ${
                  formState === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : ""
                }`}
              >
                <span className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-white/20 transition-all duration-500 group-hover:scale-150"></span>

                {formState === "submitting" && (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                )}

                {formState === "success" && <span>Message Sent!</span>}

                {formState === "idle" && (
                  <>
                    <span className="relative mr-2">Send Message</span>
                    <Send className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}

                {formState === "error" && (
                  <span>Failed to send. Try again.</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Status Indicator */}
        <div
          className={`mt-10 flex justify-center items-center gap-2 opacity-0 transform translate-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : ""
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;