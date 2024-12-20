import { CITIES } from "../Cites";
const MusicianPostingFom = () => {
  return (
    <div className="bg-stone-400 flex flex-col min-h-screen items-center">
      <div className="bg-white rounded-lg w-10/12 h-5/6 mt-5 flex flex-col items-center">
        <h2 className=" text-2xl md:text-3xl lg:text-4xl">
          Profile Information
        </h2>
        
      <form>
      <label>
          Musician name:
          <input type="text" />
        </label>

        <label>
          Phone number:
          <input minLength={10} maxLength={13} type="text" />
        </label>

        <label>
          City:
          <select name="select city">
            <option value="" disabled>
              City, Region
            </option>
            {CITIES.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>

        <label>
          Years playing music:
          <input min={0} max={30} type="number" className="w-12" />
        </label>

        <label>Instruments played:
          <select name="instrument select" >
          <option value="" disabled>
                  Select Category...
                </option>
                <option value="Keyboard">Keyboard</option>
                <option value="Guitar">Guitar </option>
                <option value="Drum">Drum </option>
                <option value="SaxPhone and related">
                  SaxPhone and related{" "}
                </option>
                <option value="Sound System Engineer">
                  Sound System Engineer
                </option>          </select>
        </label>


      </form>

      </div>
    </div>
  );
};

export default MusicianPostingFom;
