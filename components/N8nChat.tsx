"use client";
import { useEffect } from "react";
import "@n8n/chat/style.css";

const N8nChat = () => {
  useEffect(() => {
    // Vérifier si le script est déjà chargé
    if (!document.getElementById("n8n-chatbot-script")) {
      const script = document.createElement("script");
      script.src = "/chatbot.js"; // Charge le script local
      script.id = "n8n-chatbot-script";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Optionnel : retirer le script si besoin lors du démontage
      const existingScript = document.getElementById("n8n-chatbot-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return <div id="n8n-chat"></div>;
};

export default N8nChat;
