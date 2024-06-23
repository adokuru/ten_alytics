import CourseAdvisorCard from "./CourseAdvisorCard";
import CourseLeaderboard from "./CourseLeaderboard";
import UpcomingClassesCard from "./UpcomingClassesCard";
import UserCard from "./UserCard";

export default function DashboardSidebar() {
  return (
    <div className="lg:col-span-1 flex flex-col gap-[18px]">
      <CourseAdvisorCard />
      <UserCard />
      <UpcomingClassesCard />
      <CourseLeaderboard />
    </div>
  );
}
