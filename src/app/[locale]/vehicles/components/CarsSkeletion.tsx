import CarousellCardSkeletion from "@/components/Skeletion/CarousellCardSkeletion";
import PagePadding from "@/components/ui/PagePadding";
import Row from "@/components/ui/Row";

const CarsSkeletion = () => {
  const totalItems = 6;
  const items = new Array(totalItems).fill(null);
  return (
    <PagePadding>
      <Row className="grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((_, i) => (
          <CarousellCardSkeletion key={`card-${i}`} className="mx-auto w-[92vw] lg:w-auto" />
        ))}
      </Row>
    </PagePadding>
  );
};

export default CarsSkeletion;
