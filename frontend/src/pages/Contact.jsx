import React, { useEffect, useState } from "react";
import AOS from "aos";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  console.log(isSending);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  //scroll animations
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    document.title = "Contact Us | Green Next";
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    const form = {
      from_name: name,
      subject: subject,
      email: email,
      message: msg,
    };
    emailjs
      .send("", "", form, "")
      .then((response) => {
        setIsSending(false);
        toast.success("Your message has been sent. Thank you!", {
          id: "success",
        });
        setName("");
        setEmail("");
        setMsg("");
        setSubject("");
      })
      .catch((error) => {
        setIsSending(false);
        toast.error("Failed to send message. Please try again!", {
          id: "error",
        });
      });
  };
  useEffect(() => {
    if (isSending === true) {
      toast.loading("Sending...", {
        id: "loading",
      });
    } else if (isSending === false) {
      toast.dismiss("loading");
    }
  }, [isSending]);

  return (
    <>
      <main className="main">
        <div className="page-title accent-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Contact</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Contact</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="contact" className="contact section">
          <div className="mb-5">
            <iframe
              style={{ width: "100%", height: "400px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58638744405!2d79.7738030325544!3d6.922001981332362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1739630454524!5m2!1sen!2slk"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>

          <div className="container" data-aos="fade">
            <div className="row gy-5 gx-lg-5">
              <div className="col-lg-4">
                <div className="info">
                  <h3>Get in touch</h3>
                  <p>
                    Et id eius voluptates atque nihil voluptatem enim in tempore
                    minima sit ad mollitia commodi minus.
                  </p>

                  <div className="info-item d-flex">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="info-item d-flex">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                  </div>

                  <div className="info-item d-flex">
                    <i className="bi bi-phone flex-shrink-0"></i>
                    <div>
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form
                  onSubmit={sendEmail}
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      required
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
