import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/search", async (req, res) => {
    const { sector, country } = req.body;

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "llama3.2:1b",
                prompt: `List 3 investors who invest in ${sector} startups in ${country}. Give one-line reasoning for each.`,
                stream: false
            })
        });

        const data = await response.json();
        console.log("RAW OLLAMA RESPONSE:", data);
        res.json({ result: data.response || data.message || JSON.stringify(data) });


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Ollama not running" });
    }
});

app.listen(3000, () => {
    console.log("Fast Ollama server running at http://localhost:3000");
});
