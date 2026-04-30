import {defineConfig} from 'vitest/config';

const config = defineConfig({
    test: {
        environment: 'node',
        silent: false,

        disableConsoleIntercept: true,

        include: [
            '**/*.test.{ts,js}',
        ],

        poolOptions: {
            forks: {
                execArgv: [
                    '--experimental-transform-types'
                ]
            }
        }
    }
});

export default config;
