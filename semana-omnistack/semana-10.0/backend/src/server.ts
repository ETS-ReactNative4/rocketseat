import app from "./app";

const PORT = process.env.PORT || "3333";

(
    async () => {
        app.listen(PORT, () => {
            console.log(`[info]: Connected at host: http://127.0.0.1:${PORT}`);
        })
    }
)();
