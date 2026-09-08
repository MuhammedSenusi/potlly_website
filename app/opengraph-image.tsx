import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/constants/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social card. Rendered at build time, so it costs nothing at request time. */
export default async function OpenGraphImage() {
  const dir = join(process.cwd(), "app", "_og");
  const [headline, body] = await Promise.all([
    readFile(join(dir, "epilogue-bold.ttf")),
    readFile(join(dir, "jakarta-medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#fdfaf5",
          backgroundImage:
            "radial-gradient(110% 80% at 82% -10%, #ffdcb8 0%, #fdf2e4 42%, #fdfaf5 74%)",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 18,
              backgroundColor: "#e85d04",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 34,
                height: 22,
                borderRadius: "0 0 12px 12px",
                backgroundColor: "#ffffff",
                display: "flex",
              }}
            />
          </div>
          <div style={{ fontFamily: "Epilogue", fontSize: 40, color: "#191410", letterSpacing: -1.2 }}>
            Pottly
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Epilogue",
              fontSize: 78,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#191410",
              maxWidth: 880,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Real home-cooked food,</span>
            <span>made by people near you.</span>
          </div>
          <div style={{ fontSize: 29, lineHeight: 1.45, color: "#4a423b", maxWidth: 760, marginTop: 26 }}>
            Discover meals from local home cooks and small kitchens. Browse menus, see prices, and
            message the kitchen directly to order.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["No account needed", "Real prices", "Cash on delivery"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 23,
                color: "#4a423b",
                border: "1px solid #e0d3c0",
                backgroundColor: "#ffffff",
                borderRadius: 999,
                padding: "12px 24px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Epilogue", data: headline, weight: 700, style: "normal" },
        { name: "Jakarta", data: body, weight: 500, style: "normal" },
      ],
    },
  );
}
