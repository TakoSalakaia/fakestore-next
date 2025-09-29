import { redirect } from "next/navigation"; // მომხმარებლის გადამისამართება
export default function Home() {
  redirect("/products"); // მთავარი გვერდი გადამისამართდება პროდუქტების გვერდზე
}
