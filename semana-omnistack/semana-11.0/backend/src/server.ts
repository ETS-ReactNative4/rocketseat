import app from "./app";
import constants from "./utils/Constants"
import { sequelize } from './db';
(
    async () => {
        try {
            await sequelize.sync({ force: false });
        } catch (error) {
            console.log(`DB_ERROR - failed to connect to database: `, error.stack);
        }
        app.listen(constants.CONFIG.PORT, () => {
            console.log(`connected at: 127.0.0.1:${constants.CONFIG.PORT}`)
        });
    }
)();
