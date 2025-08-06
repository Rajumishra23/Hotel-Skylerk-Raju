import Img4 from '../assets/Image/Slider/Resort.jpg'; 
import WhyChooseUs from './WhyChooseUs';
export default function ResortHero() {
  return (
          <>
    <section
      className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${Img4})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-scrollY">
          Hotel Skylark
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl animate-scrollY delay-300">
          Where comfort meets luxury. Our resort is your perfect escape for
          relaxation, celebration, and productivity.
        </p>
      </div>
    </section>
    <WhyChooseUs/>
    </>
  );
}
