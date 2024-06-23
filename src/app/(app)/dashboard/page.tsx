import WelcomeBanner from "../components/WelcomeBanner";
import CoursesCount from "./components/CoursesCount";
import DashboardSidebar from "./components/DashboardSideBar";
import RecommendedCourses from "./components/RecommendedCourses";

export default function DashboardPage() {
  return (
    <div className="pt-4 md:pt-0 px-5 gap-y-6 lg:gap-x-5 md:px-0 grid lg:grid-cols-3">
      <WelcomeBanner />

      <div className="lg:col-span-2">
        <CoursesCount />
        <RecommendedCourses />
      </div>

      <DashboardSidebar />
    </div>
  );
}
