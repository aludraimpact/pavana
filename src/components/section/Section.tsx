import React from "react";

interface CardProp {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: CardProp) => {
  return (
    <div
      id={id}
      className="w-screen h-full flex flex-col justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Section;
