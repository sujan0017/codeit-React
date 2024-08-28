function Home() {
  return (
    <div className="w-full h-[85lvh] bg-[url('/src/images/home.jpg')] bg-top bg-cover bg-no-repeat flex0">
      <div className="w-1/3 flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold tracking-wide text-center ">
          Fashion at Every Door Step
        </h1>
        <button className="bg-yellow-500 px-3 py-1 rounded-md">Shop Now</button>
      </div>
    </div>
  
  );
}

export default Home;
