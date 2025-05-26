import React from 'react';
import './WhatsAppBubble.css';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const WhatsAppBubble = () => {
  return (
    <div className="Whatsapp-Bubbles-Container">
      <div className="Whatsapp-Bubbles-IconStack">
        <div className="Whatsapp-Bubbles-Tooltip" data-tooltip="Chat on WhatsApp">
        <a
  href="https://wa.me/916372545244?text=Hello%2C%20I%20hope%20you're%20doing%20well.%20I%20would%20like%20to%20discuss%20a%20requirement%20and%20need%20your%20assistance.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect."
  target="_blank"
  rel="noopener noreferrer"
  className="Whatsapp-Bubbles-Icon Whatsapp-Bubbles-Whatsapp"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp />
</a>

        </div>
    
      </div>
    </div>
  );
};

export default WhatsAppBubble;
