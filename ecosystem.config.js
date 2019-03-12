module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        // First application
        {
            name: 'prod eth btc',
            script: 'bin/www.js',
            cwd: '/Users/lilp13799/AppData/Roaming/MetaQuotes/Terminal/2E8DC23981084565FA3E19C061F586B2/MQL4/parseLog/',
            env: {
                NODE_ENV: 'production',
                PORT    : '3333',

                EXPERT    : 'Connors RSI Alerts v1_1',
                LINK_SELL : '34.76.252.86/sell',
                LINK_BUY  : '34.76.252.86/buy',
                PATH      : '../Logs',
            },
            exec_mode: "cluster",
            instances: 1,
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            min_uptime: "15s",
            max_restarts: 100,
            max_memory_restart: "400M",
            cron_restart: "0 1 * * *",
        }
    ]
};