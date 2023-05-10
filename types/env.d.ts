interface EnvVars {
  NODE_ENV: 'development' | 'production' | 'test';
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvVars {}
}
