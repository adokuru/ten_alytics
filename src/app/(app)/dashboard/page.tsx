import WelcomeBanner from "../components/WelcomeBanner";
import CoursesCount from "./components/CoursesCount";
import DashboardSidebar from "./components/DashboardSideBar";
import RecommendedCourses from "./components/RecommendedCourses";

export default function DashboardPage() {
  return (
    <div className="pt-4 px-5">
      <WelcomeBanner />
      <div>
        <CoursesCount />
        <RecommendedCourses />
      </div>
      <div className="mt-4">
        <DashboardSidebar />
      </div>
    </div>
  );
}
