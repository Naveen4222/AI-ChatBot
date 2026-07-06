import { useState } from "react";
import "./chat.css";

export const Chat = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sendMessage = async (e) => {
        try {
            e.preventDefault();
            console.log("sending:", message);

            if (!message) return;

            // 1. Add user message

            setChat(prev => [
                ...prev, { role: "user", text: message }
            ])

            // 2. sending data to backend

            const res = await fetch("https://ai-chatbot-zk7i.onrender.com/api/auth/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message
                })
            });

            // 3. Add Ai resposne

            const data = await res.json();
            console.log("AI RESPONSE:", data);
            setChat(prev => [
                ...prev,
                { role: "ai", text: data.ai || data.data }
            ]);

            setMessage("");


        } catch (error) {
            console.log("ERROR:", error);
        }
    };


    return (
        <div className="chat-container">
            <div className="chat-box">
                {chat.map((msg, index) => {
                    return (
                        <div key={index}
                            style={{
                                textAlign: msg.role === "user" ? "right" : "left",
                                margin: "10px"
                            }}>
                            <span
                                style={{
                                    padding: "10px",
                                    background: msg.role === "user" ? "#DCF8c6" : "#E5E5EA",
                                    borderRadius: "10px",
                                    display: "inline-block"
                                }}>
                                {msg.text}

                            </span>

                        </div>

                    )
                })}
            </div>
            <form className="chat-input" onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type Message"
                    style={{ padding: "10px", width: "70%" }} />

                <button type="submit" style={{ padding: "10px" }}>
                    Send
                </button>
            </form>

        </div>
    )
}