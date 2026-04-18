"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/siteContent";
import BrandGeminiIcon from "@/icons/brand-gemini-icon";
import ChevronDownIcon from "@/icons/chevron-down-icon";
import MessageIcon from "@/icons/message-icon";
import SendIcon from "@/icons/send-icon";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Record<Lang, string> = {
  fr: "Bonjour! Je suis l'assistant SSW Morocco. Comment puis-je vous aider aujourd'hui?",
  en: "Hello! I'm the SSW Morocco assistant. How can I help you today?",
  es: "Hola! Soy el asistente de SSW Morocco. Como puedo ayudarle hoy?",
};

const PLACEHOLDER: Record<Lang, string> = {
  fr: "Ecrivez votre message...",
  en: "Type your message...",
  es: "Escriba su mensaje...",
};

const TITLE: Record<Lang, string> = {
  fr: "Assistant SSW",
  en: "SSW Assistant",
  es: "Asistente SSW",
};

const SUBTITLE: Record<Lang, string> = {
  fr: "Votre assistant de support rapide",
  en: "Your quick support assistant",
  es: "Su asistente de soporte rapido",
};

const TIMESTAMP: Record<Lang, string> = {
  fr: "SSW Morocco - Agent IA",
  en: "SSW Morocco - AI Agent",
  es: "SSW Morocco - Agente IA",
};

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="ssw-chat-list">
          {listItems.map((item, i) => (
            <li key={i}>{formatInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const formatInline = (str: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))|((?:mailto:|tel:|https?:\/\/)[^\s,)]+)/g;
    let lastIndex = 0;
    let match;
    let keyIdx = 0;

    while ((match = regex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.slice(lastIndex, match.index));
      }
      if (match[1]) {
        parts.push(<strong key={keyIdx++}>{match[2]}</strong>);
      } else if (match[3]) {
        parts.push(<a key={keyIdx++} href={match[5]} target="_blank" rel="noopener noreferrer" className="ssw-chat-link">{match[4]}</a>);
      } else if (match[6]) {
        const url = match[6];
        const label = url.replace(/^mailto:/, "").replace(/^tel:/, "");
        parts.push(<a key={keyIdx++} href={url} className="ssw-chat-link">{label}</a>);
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < str.length) parts.push(str.slice(lastIndex));
    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const bulletMatch = line.match(/^[\s]*[-*]\s+(.+)/);
    if (bulletMatch) {
      listItems.push(bulletMatch[1]);
      continue;
    }
    flushList();
    if (line.trim() === "") continue;
    elements.push(<p key={`p-${i}`}>{formatInline(line)}</p>);
  }
  flushList();
  return elements;
}


export default function Chatbot() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useMemo(() => Math.random().toString(36).slice(2) + Date.now().toString(36), []);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: GREETING[lang] }]);
    }
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated, lang, sessionId }),
      });
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply || "..." }]);
    } catch {
      setMessages([
        ...updated,
        { role: "assistant", content: lang === "fr" ? "Erreur de connexion. Veuillez reessayer." : lang === "es" ? "Error de conexion. Intente de nuevo." : "Connection error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        className="ssw-chat-button"
        aria-label="open chat dialog"
        onClick={() => setOpen(!open)}
      >
        <span>
          {open ? (
            <ChevronDownIcon size={24} color="#fff" strokeWidth={2} />
          ) : (
            <BrandGeminiIcon size={28} color="#fff" />
          )}
        </span>
      </button>

      {/* Chat window */}
      {open && (
        <div className="ssw-chat-window">
          {/* Header */}
          <header className="ssw-chat-header">
            <div className="ssw-chat-header-icon">
              <MessageIcon size={24} color="#fff" strokeWidth={1.5} />
            </div>
            <div className="ssw-chat-header-text">
              <h1>{TITLE[lang]}</h1>
              <h2>{SUBTITLE[lang]}</h2>
            </div>
            <div className="ssw-chat-header-actions">
              <button
                className="ssw-chat-close"
                onClick={() => setOpen(false)}
                aria-label="close chat"
              >
                <ChevronDownIcon size={20} strokeWidth={2} />
              </button>
            </div>
          </header>

          {/* Messages */}
          <div className="ssw-chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ssw-chat-msg ssw-chat-msg--${msg.role}`}>
                <div className="ssw-chat-msg-bubble">
                  {msg.role === "assistant" ? (
                    <div className="ssw-chat-md">{renderMarkdown(msg.content)}</div>
                  ) : (
                    <p>{msg.content}</p>
                  )}
                </div>
                {msg.role === "assistant" && (
                  <span className="ssw-chat-msg-meta">{TIMESTAMP[lang]}</span>
                )}
              </div>
            ))}
            {loading && (
              <div className="ssw-chat-msg ssw-chat-msg--assistant">
                <div className="ssw-chat-msg-bubble">
                  <div className="ssw-chat-typing">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            className="ssw-chat-input-bar"
            onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={PLACEHOLDER[lang]}
              disabled={loading}
              className="ssw-chat-input"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="ssw-chat-send"
              aria-label="send message"
            >
              <SendIcon size={20} strokeWidth={2} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
