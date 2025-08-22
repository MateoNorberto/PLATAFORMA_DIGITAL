import React from 'react';
import CourseCard from './CourseCard';

const coursesData = [
  { id: 1, code: '202520-PIAD-625-TEC-NRC_13229', title: '#', status: 'Abierto', teacher: '#', color: '#FFD54F' },
  { id: 2, code: '202520-CNIU-126-ACT-NRC_28271', title: '#', status: 'Abierto', teacher: '#', color: '#BA68C8' },
  { id: 3, code: '202520-CGEU-241-TEC-NRC_13827', title: '#', status: 'Abierto', teacher: '#', color: '#4DD0E1' },
  { id: 4, code: '202520-CNIU-108-ACT-NRC_25914', title: '#', status: 'Abierto', teacher: '#', color: '#FF7043' },
  { id: 5, code: '202520-PIAD-629-TAL-NRC_13825', title: '#', status: 'Abierto', teacher: '#', color: '#4DD0E1' },
  { id: 6, code: '202520-PIAD-626-TEC-NRC_13230', title: '#', status: 'Abierto', teacher: '#', color: '#42A5F5' },
  { id: 7, section: 'Otros', code: '#', title: '#', status: 'Abierto', teacher: 'Comience ahora', color: '#000000' }
];

const CoursesSection = () => {
  const mainCourses = coursesData.filter(course => !course.section);
  const otherCourses = coursesData.filter(course => course.section === 'Otros');

  return (
    <div style={{
      flex: 1,
      height: '100vh',
      overflowY: 'auto',
      padding: '24px',
      boxSizing: 'border-box',
      backgroundColor: '#f5f5f5'
    }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
        202520 - Formación Profesional
      </h2>

      {mainCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}

      {otherCourses.length > 0 && (
        <>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '28px', marginBottom: '16px' }}>
            Otros
          </h3>

          {otherCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </>
      )}
    </div>
  );
};

export default CoursesSection;
