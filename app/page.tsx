import Image from "next/image";
import Info from "./components/info";
import Banner from "./components/banner";
import WeatherData from "./data/weather-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner/>
      <WeatherData/>
    </main>
  );
}
