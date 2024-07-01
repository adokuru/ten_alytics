import CourseDetails from "./components/CourseDetails";
import CourseReviews from "./components/CourseReviews";
import JobOpportunities from "./components/JobOpportunities";
import MainContent from "./components/MainContent";

export default function SelectedCoursePage() {
  return (
    <div className="grid gap-6">
      <CourseDetails />
      <MainContent />
      <JobOpportunities />
      <CourseReviews />
    </div>
  );
}
