import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
}

const QUICK_REPLIES = [
  "How do I join?",
  "What is U-TOPIA?",
  "Membership benefits",
  "Contact support",
];

const BOT_RESPONSES: Record<string, string> = {
  "How do I join?":
    "Great question! You can start with the Starter package at $25 for lifetime community access, or explore the Academy route to learn first.",
  "What is U-TOPIA?":
    "U-TOPIA is the ecosystem of companies built on the belief that business should serve everyone it touches. U CENTER is the learning home where it all comes together.",
  "Membership benefits":
    "Members get community access, academy learning, dividends, referral rewards, and points — with bigger perks as you move up tiers.",
  "Contact support":
    "I’m routing this to a human on the U CENTER team. In the meantime, you can also email support@u.center for help.",
};

export function SupportBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hi there! I’m Umi, your U CENTER guide. What can I help you explore today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  function handleQuickReply(text: string) {
    addUserMessage(text);
    setTimeout(() => {
      addBotMessage(BOT_RESPONSES[text] ?? "I’m still learning — a human teammate will jump in soon!");
    }, 600);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    addUserMessage(input.trim());
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(
        "Thanks for reaching out! I’ve shared your message with the U CENTER support team and someone will reply shortly."
      );
    }, 1200);
  }

  function addUserMessage(text: string) {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", text }]);
  }

  function addBotMessage(text: string) {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "bot", text }]);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {open && (
        <div className="animate-rise w-[min(92vw,380px)] overflow-hidden rounded-[2rem] border border-border bg-card/85 shadow-2xl backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-brand-gradient px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-primary-foreground ring-2 ring-white/30">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Umi</p>
                <p className="flex items-center gap-1 text-xs text-primary-foreground/80">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close support chat"
              className="grid h-8 w-8 place-items-center rounded-full text-primary-foreground/90 transition-colors hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex max-h-[min(50vh,420px)] flex-col gap-4 overflow-y-auto p-5"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {msg.role === "bot" && (
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-[10px] font-bold text-primary-foreground">
                    <Bot className="h-3.5 w-3.5" />
                  </span>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "bot"
                      ? "rounded-bl-none bg-secondary text-secondary-foreground"
                      : "rounded-br-none bg-brand-gradient text-primary-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-end gap-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-primary-foreground">
                  <Bot className="h-3.5 w-3.5" />
                </span>
                <div className="rounded-2xl rounded-bl-none bg-secondary px-4 py-3">
                  <span className="flex gap-1">
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:120ms]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:240ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-2 border-t border-border bg-background/50 px-5 py-3">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border bg-card/60 p-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="min-w-0 flex-1 rounded-full border border-border bg-background/70 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-primary-foreground transition-transform hover:scale-105 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        <span className="absolute inset-0 rounded-full bg-brand-gradient opacity-60 blur-md transition-opacity group-hover:opacity-80" />
        <span className="relative flex items-center gap-1">
          {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </span>
        {!open && (
          <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
            <Sparkles className="h-3 w-3" />
          </span>
        )}
      </button>
    </div>
  );
}
