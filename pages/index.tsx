import Cabinet from "../src/components/Cabinet/Cabinet";
import Team from "../src/components/Team/Team";
import Orthodontie from "../src/components/Orthodontie/Orthodontie";
import OrthodontieTraitement from "../src/components/OrthodontieTraitement/OrthodontieTraitement";
import Appareil from "../src/components/Appareil/Appareil";
import Urgence from "../src/components/Urgence/Urgence";

export default function Home() {
  return (
    <>
      <Cabinet />
      <Team />
      <Orthodontie />
      <OrthodontieTraitement />
      <Appareil />
      <Urgence />
    </>
  );
}
