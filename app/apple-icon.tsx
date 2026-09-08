import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the pot mark on the brand ember, padded for iOS masking. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e85d04",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 32 32">
          <path d="M16 5.6 24.4 11H7.6L16 5.6Z" fill="#faa307" />
          <path
            d="M6.6 13.2h18.8v6.1a6.8 6.8 0 0 1-6.8 6.8h-5.2a6.8 6.8 0 0 1-6.8-6.8v-6.1Z"
            fill="#fff"
          />
          <path
            d="M25.4 14.6h1.1a2 2 0 0 1 0 4h-1.1M6.6 14.6H5.5a2 2 0 0 0 0 4h1.1"
            stroke="#fff"
            strokeWidth="1.9"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="16" cy="19.4" r="2.5" fill="#e85d04" />
        </svg>
      </div>
    ),
    size,
  );
}
