const ClientPriority = () => {
  return (
    <div className="flex items-center justify-center px-10 sm:px-8 py-20">
      <div className="text-left max-w-3xl">
        {/* First Heading with underline */}
        <h1 className="relative inline-block text-[6.8vw] sm:text-3xl md:text-4xl font-[font2] ">
          You need a website.
          <span className="absolute left-0 top-1/2 w-full h-1 bg-orange-500 -translate-y-1/2"></span>
        </h1>

        {/* Second heading */}
        <h1 className="text-[6vw] sm:text-3xl md:text-4xl font-[font2] ">
          You need a high-performing website.
        </h1>

        {/* Paragraph */}
        <p className="mt-4 text-[3.2vw] sm:text-base md:text-lg font-light leading-relaxed">
          This word will make the difference between a simple visit on your
          website and a sale.
          <br />
          <br />
          As a Web developer, I create custom web solutions that{" "}
          <span className="font-bold">
            solve real business problems, strengthen your online visibility, and
            drive measurable growth.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ClientPriority;
