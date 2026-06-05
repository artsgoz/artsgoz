import { CULoginButton, SearchInput } from '@org/design-system';

export function NavActions() {
  return (
    <>
      <div className="hidden md:block">
        <SearchInput placeholder="ค้นหา" />
      </div>
      <div className="hidden sm:block">
        <CULoginButton onClick={() => console.log('ล็อกอินเข้าสู่ระบบ')} />
      </div>
    </>
  );
}
