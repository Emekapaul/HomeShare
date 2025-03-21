import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      {/* Container */}
      <div className="container mx-auto flex flex-col items-center space-y-6">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/Emekapaul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-400 transition duration-300"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297C5.37.297 0 5.67 0 12.3c0 5.3 3.438 9.8 8.207 11.385.6.111.82-.26.82-.577v-2.234c-3.338.726-4.042-1.415-4.042-1.415-.546-1.385-1.333-1.755-1.333-1.755-1.088-.745.082-.73.082-.73 1.205.084 1.838 1.24 1.838 1.24 1.07 1.834 2.807 1.304 3.49.997.107-.776.418-1.305.76-1.605-2.665-.304-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.007-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.648 1.653.243 2.873.12 3.176.768.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.918.43.372.81 1.102.81 2.222v3.293c0 .318.218.694.825.576C20.565 22.1 24 17.6 24 12.3 24 5.67 18.63.297 12 .297z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/paul-ugwuoke"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition duration-300"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.58c-1.13 0-2.05-.91-2.05-2.04s.92-2.04 2.05-2.04c1.13 0 2.05.91 2.05 2.04s-.92 2.04-2.05 2.04zM20.45 20.45h-3.5v-5.88c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1v6h-3.5V9h3.36v1.56h.05c.47-.88 1.61-1.81 3.31-1.81 3.54 0 4.19 2.33 4.19 5.36v6.34z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/Emekapaul302"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition duration-300"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.953 4.569a10.004 10.004 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.936 9.936 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482 13.947 13.947 0 01-10.141-5.144 4.822 4.822 0 001.523 6.573A4.904 4.904 0 01.96 8.868v.061a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.917 4.917 0 004.59 3.417A9.867 9.867 0 010 19.539a13.95 13.95 0 007.548 2.213c9.142 0 14.307-7.721 14.307-14.426 0-.219-.005-.436-.014-.651A10.243 10.243 0 0024 4.59a9.85 9.85 0 01-2.047 2.117z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/_emekapaul_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-blue-400 transition duration-300"
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.98.24 2.44.402a4.92 4.92 0 011.707 1.707c.162.46.348 1.27.402 2.44.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.98-.402 2.44a4.92 4.92 0 01-1.707 1.707c-.46.162-1.27.348-2.44.402-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.98-.24-2.44-.402a4.92 4.92 0 01-1.707-1.707c-.162-.46-.348-1.27-.402-2.44C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.98.402-2.44a4.92 4.92 0 011.707-1.707c.46-.162 1.27-.348 2.44-.402C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.18 0-3.553.012-4.804.07-1.108.052-1.68.235-2.078.394a3.09 3.09 0 00-1.125 1.125c-.159.398-.342.97-.394 2.078-.058 1.251-.07 1.624-.07 4.804s.012 3.553.07 4.804c.052 1.108.235 1.68.394 2.078a3.09 3.09 0 001.125 1.125c.398.159.97.342 2.078.394 1.251.058 1.624.07 4.804.07s3.553-.012 4.804-.07c1.108-.052 1.68-.235 2.078-.394a3.09 3.09 0 001.125-1.125c.159-.398.342-.97.394-2.078.058-1.251.07-1.624.07-4.804s-.012-3.553-.07-4.804c-.052-1.108-.235-1.68-.394-2.078a3.09 3.09 0 00-1.125-1.125c-.398-.159-.97-.342-2.078-.394-1.251-.058-1.624-.07-4.804-.07zM12 6.837a5.163 5.163 0 110 10.326 5.163 5.163 0 010-10.326zm0 8.5a3.337 3.337 0 100-6.674 3.337 3.337 0 000 6.674zm6.406-9.46a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HomeShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
