
const Home = () => {
  return (
    <div className="home bg-[url('./assets/worship.png')]  bg-center bg-cover h-full text-neutral-50">
      <div className="homeMassage p-10 md:p-24">
        <h1 className="text-4xl uppercase font-bold md:text-4xl lg:text-5xl">
          Finding Gospel Musicians?
        </h1>
        <p className="text-lg mt-5">Search Thousands of Gospel Musicians</p>

        <div className="select  ">
          <select className="text-stone-600 h-8 mt-5 md:p-1 w-28 md:w-60 rounded ">
            <option value="select">Select category...</option>
            <option value="Addis abeba">KeyBoard</option>
            <option value="Addis abeba">Giutar </option>
            <option value="Addis abeba">Drum </option>
            <option value="Addis abeba">Sound Enginer</option>
          </select>
          <select className="text-stone-600 h-8 mt-5 md:p-1 w-28 md:w-60 ml-2 rounded ">
            <option value="select">Select catagory...</option>
            <option value="Addis abeba">KeyBoard</option>
            <option value="Addis abeba">Giutar </option>
            <option value="Addis abeba">Drum </option>
            <option value="Addis abeba">Sound Enginer</option>
          </select>
          <button className="bg-red-700 uppercase font-bold active:bg-red-600 p-1 mt-1 rounded ml-2 text-xl">Search</button>
        </div>
      </div>
<div className="discription-container flex flex-col md:flex-row  items-center gap-10 md:gap-20 mt-24">
      <div className="discription w-full backdrop-brightness-50 p-10">
        <h2 className="font-bold text-xl text-red-700">ባለበገና</h2>
        <p className="text-l mt-1">ባለበገና ዌብሳይት ለክርስቲያን ሙዚቀኞች የአገልግሎት እድልን የሚከፍት እና ለቤተክርስቲያንም ሙዚቃ ተጫዋች ፍለጋን የሚያቀል ነው፡፡  </p>

      </div>
      <div className="discription w-full backdrop-brightness-50 p-10">
        <h2 className="font-bold text-xl text-red-700">Join Now</h2>
        <p className="text-l mt-1">ክርሰቲያን ሙዚቀኞች Join now በማለት የአገልግሎት እድላችሁን ማስፋት ማስፋት እንዲሁም ሌሎች ሙዚቀኞችን ማግኘት  ትቸላላችሁ  </p>

      </div>
      <div className="discription w-full backdrop-brightness-50 p-10">
        <h2 className="font-bold text-xl text-red-700">ባለበገና</h2>
        <p className="text-l mt-1">ባለበገና ዌብሳይት ለክርስቲያን ሙዚቀኞች የአገልግሎት እድልን የሚከፍት እና ለቤተክርስቲያንም ሙዚቃ ተጫዋች ፍለጋን የሚያቀል ነው፡፡  </p>

      </div>
      </div>
    </div>
  );
};

export default Home;
