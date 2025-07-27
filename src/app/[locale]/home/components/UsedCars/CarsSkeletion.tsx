import CarousellCardSkeletion from "@/components/Skeletion/CarousellCardSkeletion";
import LateralScroll from "@/components/ui/LateralScoll";
import Row from "@/components/ui/Row";

const CarsSkeletion = () => {
  const totalItems = 4;
  const items = new Array(totalItems).fill(null);
  return (
    <>
      <Row className="grid-col-1 hidden gap-5 lg:grid lg:grid-cols-4">
        {items.map((_, index) => {
          return <CarousellCardSkeletion key={index} />;
        })}
      </Row>
      <LateralScroll className="lg:hidden">
        {items.map((_, index) => {
          return <CarousellCardSkeletion key={index} />;
        })}
      </LateralScroll>
    </>
  );
};

export default CarsSkeletion;
