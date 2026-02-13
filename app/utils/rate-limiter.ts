class RateLimiter {
    private requests: Map<string, number[]> = new Map();
    private MAX_REQUESTS = 3;
    private WINDOW_MS = 60 * 10000;

    canSendEmail(ip: string): boolean {
        const now = Date.now();
        const recentRequests = this.requests.get(ip) || [];

        const validRequests = recentRequests.filter(
            time => now - time < this.WINDOW_MS
        );

        if(validRequests.length >= this.MAX_REQUESTS){
            return false;
        }

        validRequests.push(now);
        this.requests.set(ip, validRequests);
        return true;
    }
}

export const rateLimiter = new RateLimiter;