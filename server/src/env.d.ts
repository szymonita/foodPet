declare namespace NodeJS {
    export interface ProcessEnv {
        LISTEN_PORT: string,
        HOSTNAME: string,
        TYPEORM_CONNECTION: string,
        TYPEORM_HOST: string,
        TYPEORM_USERNAME: string,
        TYPEORM_PASSWORD: string,
        TYPEORM_DATABASE: string
        TYPEORM_PORT: string,
        TYPEORM_SYNCHRONIZE: true
        TYPEORM_LOGGING: true
        TYPEORM_ENTITIES: string
    }
}