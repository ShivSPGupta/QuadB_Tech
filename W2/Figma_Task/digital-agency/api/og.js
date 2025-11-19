import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
          width: '100%',
          height: '100%',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
          fontWeight: 'bold',
        }}
      >
        My React + Vite App
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
