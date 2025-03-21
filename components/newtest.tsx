"use client";
import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const N8nChat = () => {
  useEffect(() => {
    createChat({
      webhookUrl: "https://n8n-railway-custom-production-743f.up.railway.app/webhook/90d66fe6-e127-41fe-934e-fa991c0e1346/chat",
      mode: "window",
      showWelcomeScreen: true,
      initialMessages: ["Salut ! 👋", "Comment puis-je t'aider ?"],
      i18n: {
        fr: {
          title: "Salut ! 👋",
          subtitle: "Pose-moi une question, je suis là pour aider !",
          inputPlaceholder: "Écris ta question...",
          getStarted: "Nouvelle Conversation",
        },
      },
    });
  }, []);

  return <div id="n8n-chat"></div>;
};

export default N8nChat;