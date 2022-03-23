export const Banner = () => {
  return (
    <section
      className="mb-[30px] h-[300px] w-full rounded-[14px] px-[30px] py-[60px] shadow-gray dark:shadow-none"
      style={{
        backgroundImage: `url(/images/banner.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[495px]">
        <h1 className="mb-[30px] text-[42px] capitalize leading-[48px] text-white line-clamp-2">
          The Forbidden Kingdom Adventure War
        </h1>
        <a
          href="/"
          className="inline-block rounded-[8px] bg-primary px-[30px] py-[15px] text-[17px] font-medium leading-[25px] text-white shadow-gray dark:shadow-none"
        >
          More Details
        </a>
      </div>
    </section>
  );
};
