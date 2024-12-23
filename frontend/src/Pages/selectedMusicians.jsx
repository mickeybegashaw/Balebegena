import { useContext } from "react";
import { MusicianContext } from "../context/musiciansContext";
import { FaPhone } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { formatDistanceToNow } from "date-fns";

const SelectedMusicians = () => {
  const { selectedMusician } = useContext(MusicianContext);

  return (
    <>
      <div className="bg-stone-400 pt-3 font-serif  min-h-screen flex flex-col gap-3  items-center">
        <div className="bg-white rounded w-11/12 h-16 p-1 md:mb-4 md:h-20">
          <h2 className="text-2xl font-bold uppercase">
            {selectedMusician.name}
          </h2>
          <h2 className="text-sm text-stone-600">
            {" "}
            <span className="inline-block">
              {" "}
              <SlLocationPin />{" "}
            </span>{" "}
            {selectedMusician.address}
          </h2>
        </div>

        <div className="bg-white rounded w-11/12 p-5 h-4/5">
          <img
            className="object-contain h-60 w-full"
            src={selectedMusician.image.url}
            alt={`Image of ${selectedMusician.name}`}
          />
          <h2 className="text-xl font-bold leading-10">About</h2>
          <hr className="border-stone-500 leading-10" />
          <p className="leading-10">{selectedMusician.description}"</p>
          <h2 className="leading-10">
            {" "}
            <strong>Name</strong> : {selectedMusician.name}
          </h2>
          <h2 className="leading-10">
            {" "}
            <strong>Instruments</strong> : {selectedMusician.category}
          </h2>
          <h2 className="leading-10">
            {" "}
            <strong>Years of experiences</strong> :{" "}
            {selectedMusician.yearsPlayingMusic} years
          </h2>
          <h2 className=" leading-10">
            {" "}
            <strong>Address</strong> : {selectedMusician.address}
          </h2>
          <h2 className=" leading-10">
            {" "}
            <strong>Joined ባለበገና</strong> :{" "}
            {formatDistanceToNow(new Date(selectedMusician.createdAt), {
              addSuffix: true,
            })}
          </h2>

          {/* Phone button with a link to dial the number */}
          <a
            title="Click to call"
            href={`tel:+${selectedMusician.phoneNumber}`}
            className="bg-green-600 text-white px-4 py-2 rounded-md inline-flex items-center"
          >
            <FaPhone className="mr-2" />
            Call {selectedMusician.phoneNumber}
          </a>
        </div>
      </div>
    </>
  );
};

export default SelectedMusicians;
