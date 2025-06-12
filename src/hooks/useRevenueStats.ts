import { useEffect, useState } from 'react';

export interface RevenueStats {
  activeSubscriptions: number;
  churnRate: number;
  arpu: number;
  monthlyRevenue: number;
}

export default function useRevenueStats() {
  const [data, setData] = useState<RevenueStats>({
    activeSubscriptions: 0,
    churnRate: 0,
    arpu: 0,
    monthlyRevenue: 0,
  });

  useEffect(() => {
    async function fetchRevenue() {
      const response = await fetch('/api/stats/revenue');
      const json = await response.json();
      setData(json);
    }

    fetchRevenue();
  }, []);

  return data;
}
