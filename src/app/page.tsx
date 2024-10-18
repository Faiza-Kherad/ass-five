import Blogsection from "./components/blogSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className=" h-full w-full">
      <h1 className="mt-8 text-center font-extrabold text-purple-700 text-3xl">Velvet Horizons</h1>
      <Blogsection />
      <Footer />
    </div>
  );
}