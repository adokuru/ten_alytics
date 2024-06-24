import CertificationCard from "../../../components/CertificationCard";
import CourseBenefitCard from "../../../components/CourseBenefitCard";
import CourseInstructorsCard from "../../../components/CourseInstructorsCard";

export default function SelectedCourseSideBar() {
  return (
    <div className="grid gap-4 md:col-span-1">
      <CertificationCard />
      <CourseInstructorsCard />
      <CourseBenefitCard />
    </div>
  );
}
