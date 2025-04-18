import React from "react";

const about_me_img =
  "https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/Portfolio/saur_about_me_mclg4m";

const About = () => {
  return (
    <div className="bg-primary_bg text-primary_text py-20" id="aboutme">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={about_me_img}
            alt="About Me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <div className="text-lg mb-8 text-justify space-y-4">
              <p>
                I’m a motivated MCA graduate with hands-on experience in building scalable web applications using both <strong>Microservices</strong> and <strong>MVC architectures</strong>. I specialize in <strong>Java (Spring Boot)</strong>, <strong>Node.js</strong>, <strong>React</strong>, and <strong>MongoDB</strong>.
              </p>
              <p>Some of my key projects include:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  A <strong>YouTube Clone</strong> developed with Spring Boot Microservices, Docker, RabbitMQ, and PostgreSQL.
                </li>
                <li>
                  <strong>Atithi Devo Bhava</strong>, a travel-focused web app using Node.js, Express, MongoDB, Cloudinary, and Mapbox.
                </li>
                <li>
                  A real-world client project — an SEO-optimized, fully deployed website for a doctor using React, Vite, Tailwind CSS, and Firebase with a custom domain.
                </li>
              </ul>
              <p>
                I’m also skilled in version control using <strong>GitHub</strong> and deploying applications via <strong>Render</strong>. I have strong problem-solving skills and a passion for contributing to innovative <strong>backend development</strong> roles.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {[
                { label: "Spring Boot", width: "w-10/12" },
                { label: "MERN", width: "w-9/12" },
                { label: "Next JS", width: "w-8/12" },
              ].map(({ label, width }, index) => (
                <div
                  key={index}
                  className="flex items-center transform transition-transform duration-300 hover:scale-105"
                >
                  <label className="w-2/12">{label}</label>
                  <div className="grow bg-secondary_bg rounded-full h-2.5">
                    <div
                      className={`bg-secondary_button_grad h-2.5 rounded-full ${width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Experience Section */}
        {/* 
        <div className="mt-12 flex justify-between text-center">
          {[
            { count: "3+", label: "Years Experience" },
            { count: "50+", label: "Projects Completed" },
            { count: "10+", label: "Happy Clients" },
          ].map(({ count, label }, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-secondary_button_grad">
                {count}
              </h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
        */}
      </div>
    </div>
  );
};

export default About;
