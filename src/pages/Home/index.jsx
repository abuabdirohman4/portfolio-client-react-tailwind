import React from "react";
import Container from "../../components/Container";

export default function Home() {
  return (
    <Container>
      <div className="w-full max-w-lg">
        <h4 className="text-2xl">Hello React</h4>
        <p className="text-lg leading-relaxed text-gray-400">
          A JavaScript library for building user interfaces
        </p>
      </div>
    </Container>
  );
}
