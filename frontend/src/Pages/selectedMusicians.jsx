import { useContext } from "react";
import { MusicianContext } from "../context/musiciansContext";
import { FaPhone } from "react-icons/fa";

const SelectedMusicians = () => {
  const { selectedMusician } = useContext(MusicianContext);

  return (
    <>
      <div className="p-5">
        <img
          className="h-80 object-contain mb-5"
          src={selectedMusician.image.url}
          alt={`Image of ${selectedMusician.name}`}
        />
          <p className="font-serif ">"{selectedMusician.description}"</p>
        <h2 className="text-3xl font-bold mb-2">{selectedMusician.name}</h2>
        <h3 className="text-xl mb-2">Category: {selectedMusician.category}</h3>
        <h4 className="text-lg mb-2">Address: {selectedMusician.address}</h4>

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
    </>
  );
};

export default SelectedMusicians;
