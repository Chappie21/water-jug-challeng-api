import app from './app'
import { config } from './config/config-loader';


// init application function
(async () => {
    try {
        await app.listen(config.PORT, () => {
            console.log(`API listening on port: ${config.PORT}`)
            console.log("**** Let's play :) ****")
        })
    } catch (error) {
        console.log(error)
    }
})();