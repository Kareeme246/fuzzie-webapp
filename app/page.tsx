import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { HeroParallax } from "@/components/global/hero-parallax";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import PricingWidget from "@/components/global/pricing-widget";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center p-8 flex-col">
                <Button className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group trainsition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:from-black group-hover:to-black">
                    This app is meant only for exercise/learning
                    <br />
                    <span className="text-red-800">
                      Expect some functionality to not be complete or be
                      disabled!
                    </span>
                  </span>
                </Button>
                <h1 className="text-4xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          ></ContainerScroll>
        </div>
      </section>
      <section>
        <InfiniteMovingCards
          className="w-full mt-[250px] md:mt-[18rem]"
          items={clients}
          direction="right"
          speed="slow"
        ></InfiniteMovingCards>
      </section>
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-col items-center justify-center">
          <span
            id="pricing-section"
            className="px-4 py-2 mb-6 rounded-full border-2 text-sm font-light transition-colors hover:bg-opacity-90"
            style={{
              backgroundColor: "#292621", // Inside background color
              color: "#f7e9a5", // Inside text color
              borderColor: "#665840", // Border color
            }}
          >
            Pricing
          </span>

          <div className="text-center mb-8 w-full max-w-xl">
            <h2 className="text-5xl font-bold text-white mb-3">
              Choose the plan that fits your needs.
            </h2>
            <p style={{ color: "#9b9b9b" }} className="font-medium">
              Netus sagittis sapien sed montes condimentum. Eu eget ut cras
              viverra. Voluptat posuere ac nulla scelerisque.
            </p>
          </div>
        </div>
        <PricingWidget />
      </section>
    </main>
  );
}
