import React from "react";

const HeadingPart = ({ text }) => {
  return (
    <section className="mt-20 mb-8">
      <div className="heading text-5xl text-center">
        <span>{`{ ${text} }`}</span>
      </div>
    </section>
  );
};

export default HeadingPart;
