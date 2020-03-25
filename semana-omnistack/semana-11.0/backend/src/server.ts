import app from "./app";
import constants from "./utils/Constants"

(
    async () => {
        app.listen(constants.CONFIG.PORT, () => {
            console.log(`connected at: 127.0.0.1:${constants.CONFIG.PORT}`)
        });
    }
)();
