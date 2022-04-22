import React from "react";

const SectionContainer = ({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title: string;
  id?: string;
}) => {
  return (
    <section className="py-32" id={id}>
      <div className="mb-6 flex items-center gap-2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="h-1 flex-1 bg-blue-500"></div>
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;
