import React from "react";

const SectionContainer = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <section className="py-32" id={id}>
      {children}
    </section>
  );
};

export default SectionContainer;
