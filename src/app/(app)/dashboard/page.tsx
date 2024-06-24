import WelcomeBanner from "../components/WelcomeBanner";
import CoursesCount from "./components/CoursesCount";
import DashboardSidebar from "./components/DashboardSideBar";
import EnrolledCourses from "./components/EnrolledCourses";
import RecommendedCourses from "./components/RecommendedCourses";
import YourProgress from "./components/YourProgress";

export default function DashboardPage() {
  return (
    <div className="pt-4 md:pt-0 px-5 gap-y-6 lg:gap-x-5 md:px-0 grid lg:grid-cols-3">
      <WelcomeBanner />

      <ExistingUser />
      {/* <NewUser /> */}
    </div>
  );
}

function NewUser() {
  return (
    <>
      <div className="lg:col-span-2">
        <CoursesCount />
        <RecommendedCourses />
      </div>

      <DashboardSidebar newUser={true} />
    </>
  );
}
function ExistingUser() {
  return (
    <>
      <div className="lg:col-span-2">
        <CoursesCount />
        <EnrolledCourses />
        <YourProgress />
        <RecommendedCourses />
      </div>
      <DashboardSidebar newUser={false} />
    </>
  );
}
