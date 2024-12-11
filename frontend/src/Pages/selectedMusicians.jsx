import { useContext } from "react";
import { MusicianContext } from "../context/musiciansContext";
import { MoonLoader } from "react-spinners";
import { FaPhone } from "react-icons/fa";

const SelectedMusicians = () => {
  const { selectedMusician, loading } = useContext(MusicianContext);

  return (
    <>
      {loading ? (
        <span className="top-1/3 absolute left-1/2">
          <MoonLoader color="red" />
        </span>
      ) : (
        <div className="p-5">
          <img
            className="h-80 object-contain mb-5"
            src={selectedMusician.image.url}
            alt={`Image of ${selectedMusician.name}`}
          />
          <h2 className="text-3xl font-bold mb-2">{selectedMusician.name}</h2>
          <h3 className="text-xl mb-2">
            Category: {selectedMusician.category}
          </h3>
          <h4 className="text-lg mb-2">Address: {selectedMusician.address}</h4>

          {/* Phone button with a link to dial the number */}
          <a
            href={`tel:+${selectedMusician.phoneNumber}`}
            className="bg-green-600 text-white px-4 py-2 rounded inline-flex items-center"
          >
            <FaPhone className="mr-2" />
            Call {selectedMusician.phoneNumber}
          </a>
        </div>
      )}
    </>
  );
};

export default SelectedMusicians;
