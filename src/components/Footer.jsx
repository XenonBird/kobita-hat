const Footer = () => {
  return (
    <footer className="bg-amber-300">
      <div className="max-w-6xl mx-auto p-4 text-center">
        <p className="text-md font-semibold">
          © {new Date().getFullYear()} Kobita Hat. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Crafted with ❤️ by passionate poets and developers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
