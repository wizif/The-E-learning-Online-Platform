import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CourseDetail = () => {
  const containerRef = useRef();
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  if (!course) return <h2>Course not found!</h2>;

  return (
    <main ref={containerRef} className="course-detail">
      <img src={course.image} alt={course.title} className="course-image" />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>{course.price}</h3>
    </main>
  );
};
