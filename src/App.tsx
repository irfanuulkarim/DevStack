import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <h1 className="text-4xl font-bold">
            Dev Stack Builder
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;