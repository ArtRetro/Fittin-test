"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', activeUsers: 120 },
  { name: 'Tue', activeUsers: 200 },
  { name: 'Wed', activeUsers: 150 },
  { name: 'Thu', activeUsers: 250 },
  { name: 'Fri', activeUsers: 300 },
  { name: 'Sat', activeUsers: 200 },
  { name: 'Sun', activeUsers: 180 },
];

export default function UserActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Line type="monotone" dataKey="activeUsers" stroke="#4ade80" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
