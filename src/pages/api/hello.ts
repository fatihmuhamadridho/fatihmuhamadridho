// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload = [
    ['000000', 'Success'], // status
    ['123', 'fatih@example.com'], // data
    new Date().toISOString(), // meta timestamp
  ];
  res
    .status(200) // bisa diganti 400, 401, 500, dll
    .send(")]}',\n" + JSON.stringify(payload));
}

// useEffect(() => {
//   async function testFetching() {
//     const response = await axios.get('/api/hello');
//     console.log({ response: JSON.parse(String(response.data).substring(5)) });
//   }
//   testFetching();
// }, []);
