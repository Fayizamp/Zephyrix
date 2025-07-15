import React from 'react';

const WHATSAPP_NUMBER = 'YOUR_PHONE_NUMBER'; // Replace with your WhatsApp number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsappFloat: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-[1000] bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
      style={{ boxShadow: '0 4px 24px rgba(34,197,94,0.25)' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.001 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.267.6 4.467 1.733 6.4l-1.867 6.8 7.067-1.867c1.867 1.067 4 1.6 6.133 1.6h.001c7.067 0 12.8-5.733 12.8-12.8s-5.733-12.8-12.8-12.8zm0 23.467c-2 0-3.867-.533-5.6-1.467l-.4-.267-4.2 1.067 1.133-4.067-.267-.4c-1.067-1.733-1.6-3.733-1.6-5.733 0-6.067 4.933-11 11-11s11 4.933 11 11-4.933 11-11 11zm6.133-8.133c-.333-.167-1.933-.933-2.233-1.033-.3-.1-.517-.167-.733.167-.217.333-.833 1.033-1.017 1.25-.183.217-.367.25-.7.083-.333-.167-1.4-.517-2.667-1.65-.983-.883-1.65-1.967-1.85-2.3-.183-.317-.02-.483.137-.65.14-.14.317-.367.483-.55.167-.183.217-.317.333-.533.117-.217.058-.4-.025-.567-.083-.167-.733-1.767-1-2.417-.267-.65-.537-.55-.733-.55-.183-.008-.4-.01-.617-.01-.217 0-.567.08-.867.383-.3.3-1.133 1.1-1.133 2.683 0 1.583 1.158 3.117 1.317 3.333.158.217 2.283 3.5 5.533 4.767.773.333 1.375.533 1.85.683.775.247 1.48.212 2.037.129.621-.092 1.933-.792 2.208-1.558.275-.767.275-1.425.192-1.558-.083-.133-.3-.217-.633-.367z"/>
      </svg>
    </a>
  );
};

export default WhatsappFloat; 