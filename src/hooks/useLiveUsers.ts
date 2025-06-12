import { useEffect, useState } from 'react';

export default function useLiveUsers() {
  const [activeUsers, setActiveUsers] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/api/stats/active-users');
      const json = await response.json();
      setActiveUsers(json.count);
    }, 5000); // updates every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return activeUsers;
}
