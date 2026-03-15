"use client";

import { useState } from "react";

export default function AboutPage() {
  const title = "About Us";
  const unusedCount = 42;
  const unusedMessage = "this will fail lint";

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>This is the about page.</p>
    </div>
  );
}
