import { useEffect, useState } from 'react';

export interface CourseStats {
  active: number;
  pending: number;
}

export default function useCourseStats() {
  const [data, setData] = useState<CourseStats>({ active: 0, pending: 0 });

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch('/api/stats/courses');
      const json = await response.json();
      setData(json);
    }

    fetchStats();
  }, []);

  return data;
}
