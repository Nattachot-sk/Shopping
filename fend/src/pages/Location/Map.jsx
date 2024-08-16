import React from "react";

function Map() {
  return (
    <div className="w-full h-full">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18349.626114913586!2d100.64912276454862!3d14.795274924265575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311e006f7bc257e1%3A0xb44e3b5a4643b57c!2sKing%20Narai%20the%20Great%20Monument!5e0!3m2!1sen!2sth!4v1721032287413!5m2!1sen!2sth"

        className="w-[280px] h-[250px] mt-5 md:w-full md:h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
