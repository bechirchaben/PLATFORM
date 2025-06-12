import { useEffect, useState } from 'react';

export interface UserStats {
  total: number;
  centers: number;
  admins: number;
  instructors: number;
  students: number;
}

export default function useUserStats() {
  const [data, setData] = useState<UserStats>({
    total: 0,
    centers: 0,
    admins: 0,
    instructors: 0,
    students: 0,
  });

  useEffect(() => {
    // Replace with actual API call
    async function fetchStats() {
      const response = await fetch('/api/stats/users');
      const json = await response.json();
      setData(json);
    }

    fetchStats();
  }, []);

  return data;
}
