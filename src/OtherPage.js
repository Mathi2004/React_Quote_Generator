import React from "react";

const OtherPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const quote = searchParams.get("quote");

  return (
    <div>
      <h1>Other Page</h1>
      <p>Quote: {quote}</p>
    </div>
  );
};

export default OtherPage;
