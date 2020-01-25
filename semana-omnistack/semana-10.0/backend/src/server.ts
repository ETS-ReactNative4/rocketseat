import app from "./app";
import { sequelize } from "./db";

const PORT = process.env.PORT || "3333";

(
    async () => {
        try {
            console.log(sequelize.config);
            await sequelize.sync({ force: false });
        } catch (err) {
            console.log(`[error]: DB_ERROR failed to connect on database: `, err.stack);
        }
        app.listen(PORT, () => {
            console.log(`[info]: Connected at host: http://127.0.0.1:${PORT}`);
        })
    }
)();
