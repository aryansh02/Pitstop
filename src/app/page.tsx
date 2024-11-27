import Sidebar from "@/components/Sidebar";
import BannerHP from "@/components/BannerHP";
import FlashSales from "@/components/FlashSales";
import BrowseByCompany from "@/components/BrowseByCompany";
import BestSellingProducts from "@/components/BestSellingProducts";
import CategoriesBanner from "@/components/CategoriesBanner";
import ExploreProducts from "@/components/ExploreProducts";
import NewArrival from "@/components/NewArrival";
import Features from "@/components/Features";


export default function Home() {
  return (
    <>
      {/* Sidebar and Banner Section */}
      <div className="mt-[138px] flex items-stretch bg-white h-[483px]">
        <div className="w-1/4 bg-white border-r border-gray-300">
          <Sidebar />
        </div>
        <div className="w-3/4 bg-white">
          <BannerHP />
        </div>
      </div>

      {/* Flash Sales Section */}
      <div className="pt-20 bg-white">
        <FlashSales />
      </div>

      {/* Browse By Company Section */}
      <div className="pt-20 bg-white">
        <BrowseByCompany />
      </div>

      {/* Best Selling Products Section */}
      <div className="pt-20 bg-white">
        <BestSellingProducts />
      </div>

      {/* Categories Banner Section */}
      <div className="pt-20 bg-white">
        <CategoriesBanner />
      </div>

      {/* Explore Products Section */}
      <div className="pt-20 bg-white">
        <ExploreProducts />
      </div>

      {/* New Arrival Section */}
      <div className="pt-20 bg-white mb-16">
        <NewArrival />
      </div>

      <div className="pt-20 bg-white mb-16">
        <Features />
      </div>
    </>
  );
}
