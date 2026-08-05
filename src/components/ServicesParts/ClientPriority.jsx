const ClientPriority = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <div className="flex flex-col items-start text-left max-w-2xl md:max-w-3xl lg:max-w-2xl w-full">
        {/* First Heading with strikethrough line */}
        <h1 className="relative inline-block text-[6.8vw] sm:text-3xl md:text-4xl font-[font2]">
          You need a website.
          <span className="absolute left-0 top-1/2 w-full h-[3px] bg-amber-500 -translate-y-1/2"></span>
        </h1>

        {/* Second heading */}
        <h1 className="text-[6vw] sm:text-3xl md:text-4xl font-[font2] mt-1">
          You need a high-performing website.
        </h1>

        {/* Paragraph 1 */}
        <p className="mt-6 text-[3.2vw] sm:text-base md:text-lg font-light leading-relaxed text-(--text-color)/80">
          This word will make the difference between a simple visit on your
          website and a sale.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 text-[3.2vw] sm:text-base md:text-lg font-light leading-relaxed text-(--text-color)/80">
          As a Web developer, I create custom web solutions that{" "}
          <span className="font-bold text-(--text-color)">
            solve real business problems, strengthen your online visibility, and
            drive measurable growth.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ClientPriority;
