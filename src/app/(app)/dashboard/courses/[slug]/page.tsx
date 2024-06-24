import CourseDetails from "./components/CourseDetails";
import CourseReviews from "./components/CourseReviews";
import JobOpportunities from "./components/JobOpportunities";
import MainContent from "./components/MainContent";

export default function SelectedCoursePage() {
  return (
    <div className="pt-4 md:pt-0 px-5 md:px-0 grid gap-6">
      <CourseDetails />
      <MainContent />
      <JobOpportunities />
      <CourseReviews />
    </div>
  );
}
