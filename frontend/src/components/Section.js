import { SectionHeading } from "./SectionHeading";

export const Section = ({ title, link, children }) => {
  return (
    <section className="mb-[30px]">
      <SectionHeading title={title} link={link} />
      {children}
    </section>
  );
};
