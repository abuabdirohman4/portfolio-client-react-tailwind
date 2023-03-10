import React from "react";
import Container from "../../components/Container";
export default function About() {
  return (
    <Container>
      <div className="w-full max-w-lg">
        <h4 className="text-2xl">I'm About Page</h4>
        <p className="text-lg leading-relaxed text-gray-400">
          You can go to this page because the React router.
        </p>
      </div>
    </Container>
  );
}
