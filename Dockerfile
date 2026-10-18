# syntax=docker/dockerfile:1

FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM oven/bun:1 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Public env is inlined at build time; pass it as build args, then rebuild
# when these values change.
ARG NEXT_PUBLIC_SITE_URL=https://alfito.dev
ARG NEXT_PUBLIC_GA_ID=
ARG NEXT_PUBLIC_GOOGLE_ADS_ID=
ARG NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=
ARG NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_GOOGLE_ADS_ID=$NEXT_PUBLIC_GOOGLE_ADS_ID
ENV NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=$NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
ENV NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=$NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_STANDALONE=1

RUN bun run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -S nodejs -g 1001 && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
