import CourseCard from "../../components/CourseCard";

export default function CourseCards() {
  return (
    <>
      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
}
