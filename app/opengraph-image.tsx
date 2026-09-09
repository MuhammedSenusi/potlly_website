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
          padding: 64,
          backgroundColor: "#fdfaf5",
          backgroundImage:
            "radial-gradient(110% 80% at 82% -10%, #ffdcb8 0%, #fdf2e4 42%, #fdfaf5 74%)",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 15,
              backgroundColor: "#e85d04",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Epilogue",
              fontSize: 32,
              color: "#ffffff",
            }}
          >
            P
          </div>
          <div
            style={{
              fontFamily: "Epilogue",
              fontSize: 34,
              color: "#191410",
              letterSpacing: -1,
            }}
          >
            Pottly
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Epilogue",
              fontSize: 62,
              lineHeight: 1.06,
              letterSpacing: -2.4,
              color: "#191410",
              maxWidth: 900,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Real Nigerian home cooking,</span>
            <span>made by people near you.</span>
          </div>
          <div
            style={{
              fontSize: 25,
              lineHeight: 1.45,
              color: "#4a423b",
              maxWidth: 720,
              marginTop: 22,
            }}
          >
            Discover Nigerian and West African meals from home cooks and small kitchens across the
            GTA. Browse menus, see prices, and message the kitchen directly to order.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["No account needed", "Real prices", "e-Transfer or cash"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 20,
                color: "#4a423b",
                border: "1px solid #e0d3c0",
                backgroundColor: "#ffffff",
                borderRadius: 999,
                padding: "10px 20px",
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
