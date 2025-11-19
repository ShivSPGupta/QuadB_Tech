import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge'
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          color: 'white',
          fontSize: 64,
          fontWeight: 'bold'
        }}
      >
        My Vite App OG
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
