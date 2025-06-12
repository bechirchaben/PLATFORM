// src/components/ui/tabs.tsx
import { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './table';
import Button from './button';
import Card from './card';

interface TabsProps {
  courseStats: { active: number; pending: number };
  revenueStats: { churnRate: number };
  activeUsers: number;
}

export default function Tabs({ courseStats, revenueStats, activeUsers }: TabsProps) {
  const [tab, setTab] = useState<'users' | 'courses' | 'analytics'>('users');

  return (
    <div className="mt-6">
      <div className="flex space-x-4 mb-4">
        <Button onClick={() => setTab('users')} variant={tab === 'users' ? 'primary' : 'outline'}>
          Users
        </Button>
        <Button onClick={() => setTab('courses')} variant={tab === 'courses' ? 'primary' : 'outline'}>
          Courses
        </Button>
        <Button onClick={() => setTab('analytics')} variant={tab === 'analytics' ? 'primary' : 'outline'}>
          Analytics
        </Button>
      </div>

      {tab === 'users' && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Active</TableCell>
              <TableCell><Button size="sm" variant="outline">Edit</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Smith</TableCell>
              <TableCell>Student</TableCell>
              <TableCell>Inactive</TableCell>
              <TableCell><Button size="sm" variant="outline">Edit</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Marie Claire</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>Active</TableCell>
              <TableCell><Button size="sm" variant="outline">Edit</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}

      {tab === 'courses' && (
        <div className="grid grid-cols-2 gap-4">
          <Card title="Active Courses" value={courseStats.active} />
          <Card title="Pending Approval" value={courseStats.pending} />
        </div>
      )}

      {tab === 'analytics' && (
        <div className="grid grid-cols-2 gap-4">
          <Card title="Active Users Now" value={activeUsers} />
          <Card title="Churn Rate" value={`${revenueStats.churnRate}%`} />
        </div>
      )}
    </div>
  );
}
