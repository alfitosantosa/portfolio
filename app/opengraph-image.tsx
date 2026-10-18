import { ImageResponse } from "next/og"

import { site } from "@/lib/site"

export const alt = `${site.name} — ${site.role} in Jakarta`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#7d838a",
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#ff6a0d",
            }}
          />
          OPEN TO CONTRACT
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#c4c9d0",
              lineHeight: 1.35,
              maxWidth: 980,
            }}
          >
            Full-stack engineer in Jakarta — React interfaces, Go services,
            payments, and the infrastructure underneath.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#7d838a",
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          <div>{new URL(site.url).host}</div>
          <div>REACT · GO · POSTGRES · DOCKER</div>
        </div>
      </div>
    ),
    size
  )
}
