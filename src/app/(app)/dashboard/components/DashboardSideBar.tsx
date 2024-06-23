import CertificationCard from "./CertificationCard";
import ChatInstructorsCard from "./ChatInstructorsCard";
import CourseAdvisorCard from "./CourseAdvisorCard";
import CourseLeaderboard from "./CourseLeaderboard";
import UpcomingClassesCard from "./UpcomingClassesCard";
import UserCard from "./UserCard";

export default function DashboardSidebar({ newUser }: { newUser: boolean }) {
  return (
    <div className="lg:col-span-1 flex flex-col gap-[18px]">
      {newUser ? (
        <>
          <CourseAdvisorCard />
          <UserCard />
          <UpcomingClassesCard newUser={newUser} />
          <CourseLeaderboard newUser={newUser} />
        </>
      ) : (
        <>
          <UpcomingClassesCard newUser={newUser} />
          <ChatInstructorsCard />
          <CourseLeaderboard newUser={newUser} />
          <CertificationCard />
        </>
      )}
    </div>
  );
}
