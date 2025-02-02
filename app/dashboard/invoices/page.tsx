import { sleep } from "@/app/lib/utils";
export default async function Page() {
  await sleep(1000);
  return <p>Invoices Page</p>;
}
