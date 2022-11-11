import Header from "../Header";
import { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }
export default function Layout({children}){
  return (
    <div>
      <Header />
      <div>{children}</div>
      {/* <Footer/> */}
    </div>
  );
}