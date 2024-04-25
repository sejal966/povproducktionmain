import Layout from "@/components/Layout/Layout";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Aboutddetails from "@/components/Aboutus/Aboutddetails";
const Aboutus  = () => {
    return (
      <Layout pageTitle="Abou us">
        <InnerBanner title="About us" />
        <Aboutddetails />
       
      </Layout>
    );
  };
  
  export default Aboutus;