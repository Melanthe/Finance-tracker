declare module 'next-pwa' {
    import type { NextConfig } from 'next';

    interface PWAConfig {
        dest?: string;
        disable?: boolean;
        register?: boolean;
        scope?: string;
        sw?: string;
        skipWaiting?: boolean;
        dynamicStartUrl?: boolean;
        cacheOnFrontEndNav?: boolean;
        reloadOnOnline?: boolean;
        customWorkerDir?: string;
        buildExcludes?: Array<string | RegExp>;
        publicExcludes?: Array<string>;
        fallbacks?: Record<string, string>;
        cacheStartUrl?: boolean;
    }

    export default function withPWA(
        config?: PWAConfig
    ): (nextConfig: NextConfig) => NextConfig;
}