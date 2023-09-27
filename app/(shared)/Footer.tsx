import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Blog of the Future is your trusted source for the latest insights,
            trends, and stories from the world of technology, travel, and more.
            Explore our articles and stay informed about the future.
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <ul className="list my-5">
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Travel</a>
            </li>
            <li>
              <a href="/">Other</a>
            </li>
          </ul>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Have questions or feedback? Reach out to us.</p>
          <p>(510)993-6049</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
