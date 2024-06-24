import CourseDetails from "./components/CourseDetails";
import CourseReviews from "./components/CourseReviews";
import JobOpportunities from "./components/JobOpportunities";

export default function SelectedCoursePage() {
  return (
    <div className="pt-4 md:pt-0 px-5 md:px-0">
      <CourseDetails />
      <JobOpportunities />
      <CourseReviews />
    </div>
  );
}
