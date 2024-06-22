import CourseAdvisorCard from "./CourseAdvisorCard";
import CourseLeaderboard from "./CourseLeaderboard";
import UpcomingClassesCard from "./UpcomingClassesCard";
import UserCard from "./UserCard";

export default function DashboardSidebar() {
  return (
    <div className="grid gap-[18px]">
      <CourseAdvisorCard />
      <UserCard />
      <UpcomingClassesCard />
      <CourseLeaderboard />
    </div>
  );
}
