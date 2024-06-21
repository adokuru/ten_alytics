import CoursesCards from "./components/CoursesCards";
import RecommendedCourses from "./components/RecommendedCourses";

export default function DashboardPage() {
  return (
    <>
      <div>
        <CoursesCards />
        <RecommendedCourses />
      </div>
    </>
  );
}
