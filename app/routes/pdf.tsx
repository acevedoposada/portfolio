import type { LoaderFunction } from "@remix-run/node";
import { renderToStream } from "@react-pdf/renderer";

import { CurriculumDocument } from "~/components";
import { groupBy, orderBy } from "lodash";

import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  const querySnapshot = await db.collection("resume").get();
  const data: any[] = [];
  querySnapshot.forEach((value) => {
    data.push(value.data());
  });

  const groupedData = groupBy(data, "type");

  let resume = {
    ...groupedData,
    about: groupedData?.about?.[0],
    experience: orderBy(groupedData.experience, "position"),
  };

  const stream = await renderToStream(<CurriculumDocument {...resume} />);

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
