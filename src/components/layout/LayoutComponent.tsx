import { Layout } from "antd";
import Header from "./HeaderComponent";
import { Outlet } from "react-router-dom";
function LayoutComponent() {
  return (
    <Layout id="layout">
      {/* <SideBar  /> */}
      <Layout>
       
        <Header  />

          <Outlet/>
     
        {/* <Footer /> */}

      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
