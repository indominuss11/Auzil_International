import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const runtime = "edge";
export const alt = "Auzil International — Personal Care & Pet Care Manufacturing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1F2A24",
          color: "#F8F6F1",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#B0A17E", textTransform: "uppercase" }}>
          {company.city}, {company.country}
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, marginTop: 24, lineHeight: 1.15 }}>
          Personal Care &amp; Pet Care Manufacturing
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#D3CCBB" }}>
          {company.legalName} — Private Label &amp; Contract Manufacturing
        </div>
      </div>
    ),
    { ...size },
  );
}
