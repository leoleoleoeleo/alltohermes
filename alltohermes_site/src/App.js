
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-parchment text-ink p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">AlltoHermes</h1>
        <p className="text-xl mt-2">A Journal of Thought & Experience</p>
      </header>
      <nav className="flex justify-center gap-6 text-lg border-b border-ink pb-4 mb-8">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Journal</a>
        <a href="#" className="hover:underline">Archive</a>
      </nav>
      <main className="max-w-3xl mx-auto space-y-8">
        <article className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">First Entry</h2>
          <p>Welcome to AlltoHermes. This is a space for writing, reflection, and exploration of personal philosophy, art, and science.</p>
        </article>
      </main>
    </div>
  );
}

export default App;
