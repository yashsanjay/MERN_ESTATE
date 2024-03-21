import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      const fetchLandlord = async () => {
        const response = await fetch(`/api/user/${listing.userRef}`);
        const data = await response.json();
        setLandlord(data);
      };
      fetchLandlord();
    } catch (error) {
      console.log(error);
    }
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <Link
            className="bg-slate-700 text-center rounded-lg text-white uppercase hover:opacity-95 p-3"
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message} `}
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
