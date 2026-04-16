"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/siteContent";

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

const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C14 0 14 10.5 7 14C14 17.5 14 28 14 28C14 28 14 17.5 21 14C14 10.5 14 0 14 0Z" fill="white"/>
    <path d="M6 2C6 2 6 6.5 3 8C6 9.5 6 14 6 14C6 14 6 9.5 9 8C6 6.5 6 2 6 2Z" fill="white" opacity="0.7"/>
  </svg>
);

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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          ) : (
            <ChatIcon />
          )}
        </span>
      </button>

      {/* Chat window */}
      {open && (
        <div className="ssw-chat-window">
          {/* Header */}
          <header className="ssw-chat-header">
            <div className="ssw-chat-header-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
