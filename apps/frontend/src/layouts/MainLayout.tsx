// apps/frontend/src/layouts/MainLayout.tsx
import { Outlet } from 'react-router';
// ✅ นำเข้าคอมโพเนนต์ Navbar ตัวใหม่มาใช้งาน พร้อมระบุนามสกุลไฟล์เป็น .js ตามกฎ nodenext
import { Navbar } from '../components/Navbar/index.js';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background-subtle flex flex-col">
      {/* ✅ วาง Navbar ชิ้นใหม่ไว้ด้านบนสุดเพื่อให้แสดงผลคงที่ในทุกๆ หน้าจอ */}
      <Navbar />

      {/* ส่วนพื้นที่ตรงกลางสำหรับแสดงเนื้อหาที่จะเปลี่ยนไปตามหน้าที่กดลิงก์สลับ */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
