import CategoryItemSkeletion from "@/components/Skeletion/CategoryItemSkeletion";
import LateralScroll from "@/components/ui/LateralScoll";
import Row from "@/components/ui/Row";

const CategorySkeletion = () => {
  const totalItems = 4;
  const items = new Array(totalItems).fill(null);
  return (
    <>
      <Row className="grid-col-1 hidden gap-8 lg:grid lg:grid-cols-4">
        {items.map((_, index) => {
          return <CategoryItemSkeletion key={index} />;
        })}
      </Row>
      <LateralScroll className="lg:hidden">
        {items.map((_, index) => {
          return <CategoryItemSkeletion key={index} />;
        })}
      </LateralScroll>
    </>
  );
};

export default CategorySkeletion;
