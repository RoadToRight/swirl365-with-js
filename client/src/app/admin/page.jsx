"use client"
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", age: 28, role: "Admin" },
  { id: 2, name: "Emily Johnson", email: "emily.johnson@example.com", age: 25, role: "User" },
  { id: 3, name: "Michael Smith", email: "michael.smith@example.com", age: 32, role: "Editor" },
  { id: 4, name: "Sophia Brown", email: "sophia.brown@example.com", age: 22, role: "User" },
  { id: 5, name: "David Miller", email: "david.miller@example.com", age: 35, role: "Admin" },
  { id: 6, name: "Olivia Wilson", email: "olivia.wilson@example.com", age: 27, role: "User" },
  { id: 7, name: "James Taylor", email: "james.taylor@example.com", age: 30, role: "Moderator" },
  { id: 8, name: "Ava Martinez", email: "ava.martinez@example.com", age: 24, role: "User" }
];

const columns = [
  { accessorKey:'id', header:"Id", cell:(props) => <p>{props.getValue()}</p> },
  { accessorKey:'name', header:"Name", cell:(props) => <p>{props.getValue()}</p> },
  { accessorKey:'email', header:"Email", cell:(props) => <p>{props.getValue()}</p> },
  { accessorKey:'age', header:"Age", cell:(props) => <p>{props.getValue()}</p> },
  { accessorKey:'role', header:"Role", cell:(props) => <p>{props.getValue()}</p> },
]

const Dashboard = () => {
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const [Data, setData] = useState(users);

  const table = useReactTable({
    data: Data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#1f2937',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '50px', marginBottom: '10px' }} />
          <h1 style={{ margin: '0', fontSize: '18px' }}>Sohaib</h1>
          <h3 style={{ margin: '0', fontSize: '14px', fontWeight: 'normal' }}>sohaib@gmail.com</h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '10px 0', cursor: 'pointer' }}>Blogs</li>
          <li style={{ padding: '10px 0', cursor: 'pointer' }} onClick={() => setOpenPortfolio(prev => !prev)}>
            Portfolio <IoIosArrowDown style={{ verticalAlign: 'middle' }} />
            {openPortfolio && (
              <div style={{ marginTop: '10px', paddingLeft: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div>Web development</div>
                <div>Mobile apps</div>
              </div>
            )}
          </li>
          <Link href={"/admin/users"} style={{ textDecoration: 'none', color: '#fff' }}>
            <li style={{ padding: '10px 0', cursor: 'pointer' }}>Users</li>
          </Link>
          <li style={{ padding: '10px 0', cursor: 'pointer' }}>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px', overflowX: 'auto' }}>
        <h2>All Users</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #ddd',
          borderRadius: '5px',
          overflow: 'hidden',
          marginTop: '20px'
        }}>
          {/* Table Header */}
          {table.getHeaderGroups().map(headerGroup => (
            <div key={headerGroup.id} style={{ display: 'flex', backgroundColor: '#f3f4f6' }}>
              {headerGroup.headers.map(header => (
                <div
                  key={header.id}
                  style={{
                    flex: 1,
                    padding: '10px',
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd'
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </div>
              ))}
            </div>
          ))}

          {/* Table Body */}
          {table.getRowModel().rows.map(row => (
            <div key={row.id} style={{ display: 'flex', borderTop: '1px solid #ddd' }}>
              {row.getVisibleCells().map(cell => (
                <div key={cell.id} style={{ flex: 1, padding: '10px', borderRight: '1px solid #ddd' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
