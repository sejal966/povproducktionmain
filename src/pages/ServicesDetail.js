import ServiceDetail from "@/components/Servicesdetail/ServiceDetail";
import Layout from "@/components/Layout/Layout";
import React from "react";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
const ServicesDetail = () => {
    return (
      <Layout pageTitle="Service Detail">
        <InnerBanner title="Services Detail" />
        <ServiceDetail />
       
      </Layout>
    );
  };
  
  export default ServicesDetail;