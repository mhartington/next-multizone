import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title") ?? "Prism Docs";
  const section = request.nextUrl.searchParams.get("section") ?? "Documentation";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, rgb(15, 98, 254) 0%, rgb(9, 34, 93) 100%)",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "32px",
            opacity: 0.9
          }}
        >
          <span>Prism</span>
          <span style={{ opacity: 0.75 }}>/</span>
          <span>Docs</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "36px", opacity: 0.8 }}>{section}</div>
          <div style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.05 }}>
            {title}
          </div>
        </div>
      </div>
    ),
    size
  );
}
