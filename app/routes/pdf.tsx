import type { LoaderFunction } from "@remix-run/node";
import { renderToStream } from "@react-pdf/renderer";

import { CurriculumDocument } from "~/components";

export const loader: LoaderFunction = async () => {
  const stream = await renderToStream(<CurriculumDocument />);

  let body: Buffer = await new Promise((resolve, reject) => {
    let buffers: Uint8Array[] = [];
    stream.on("data", (data) => {
      buffers.push(data);
    });
    stream.on("end", () => {
      resolve(Buffer.concat(buffers));
    });
    stream.on("error", reject);
  });

  let headers = new Headers({ "Content-Type": "application/pdf" });
  return new Response(body, { status: 200, headers });
};
