import { WebinarHero } from "@/components/webinar/WebinarHero";
import { WebinarDetails } from "@/components/webinar/WebinarDetails";
import { WebinarBenefits } from "@/components/webinar/WebinarBenefits";
import { WebinarHost } from "@/components/webinar/WebinarHost";
import { WebinarBonus } from "@/components/webinar/WebinarBonus";
import { WebinarRegistration } from "@/components/webinar/WebinarRegistration";

export default function WebinarPage() {
  return (
    <div className="pt-20">
      <WebinarHero />
      <WebinarDetails />
      <WebinarBenefits />
      <WebinarHost />
      <WebinarBonus />
      <WebinarRegistration />
    </div>
  );
}