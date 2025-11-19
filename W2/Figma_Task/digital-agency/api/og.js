import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge'
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          color: 'white',
          fontSize: 72,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold'
        }}
      >
        OG Works!
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
