import Image from "next/image";
import { Button } from "../ui/button";
import heroImage from "../../public/hero.png";
const Hero = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="p-5 flex flex-col justify-center items-center md:flex-row gap-10 md:gap-0">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-[40px] leading-[48px] md:text-[48px] md:leading-[60px] xl:text-[58px] xl:leading-[74px] font-bold">
            Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>
          <p className="text-xl">
            Book and learn helpful tips from 3,168+ mentors in world-class
            companies with our global community.
          </p>
          <Button
            className="md:w-fit bg-orange-500 hover:bg-orange-600 rounded-full"
            size="lg"
          >
            Explore Now
          </Button>
        </div>
        <Image
          src={heroImage}
          alt="Hero image"
          className="flex-1 max-h-[40vh] object-contain object-center lg:max-h-[50vh]"
        />
      </div>
    </section>
  );
};

export default Hero;
