import Container from "@/components/ui/Container";

const Hero = () => {
  return (
    <div className=" bg-hero bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="relative h-[700px] lg:gap-8 lg:py-16 xl:gap-0">
          <div className="absolute bottom-24 left-0 place-self-center ">
            <p className="max-w-2xl text-4xl  leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
              COMMITED TO MANUFACTURING EXCELLENCE
            </p>
          </div>
          <div className="absolute bottom-8 right-0 place-self-center ">
            <p className="font-reguar t max-w-2xl text-xl text-white md:text-xl xl:text-2xl">
              Manufaturing with Excellence
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
