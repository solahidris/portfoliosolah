// pages/api/profile-languages-commits.js

export default async (req, res) => {
  const response = await fetch('http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=solahidris&theme=react&exclude=rust');
  const blob = await response.blob();
  const buffer = await blob.arrayBuffer();
  const array = new Uint8Array(buffer);

  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
    'Content-Length': array.length,
  });
  res.end(array);
};
