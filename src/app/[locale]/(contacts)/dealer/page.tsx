import Container from "@/components/ui/Container"
import PagePadding from "@/components/ui/PagePadding"
import Mapp from "./components/Mapper"

const Motorcare = () => {
  return (
    <Container className="mt-[12vh]">
        <PagePadding>
                <Mapp
                name="Maputo"
                image="https://makerkit.dev/assets/images/posts/nextjs13-tutorial.webp"
            />
        </PagePadding>
      
    </Container>
  )
}

export default Motorcare