import Banner from "./Components/Banner";
import Header from "./Components/Header";
import ProductFeed from "./Components/ProductFeed";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}

export default App;
