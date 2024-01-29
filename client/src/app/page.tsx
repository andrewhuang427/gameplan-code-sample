import { Navbar } from "@/components/shared/navigation/Navbar";
import TournamentsGrid from "@/components/home/TournamentsGrid";
import CampsGrid from "../components/home/CampsGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TournamentsGrid />
      <CampsGrid />
    </main>
  );
}
