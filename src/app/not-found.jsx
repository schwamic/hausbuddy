import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";
import Jumbotron from "@/app/components/Jumbotron";
import ContactCard from "@/app/components/ContactCard";
import WikiCard from "@/app/components/WikiCard";
import DiscordCard from "@/app/components/DiscordCard";
import contact from "@/content/contact";
import content from "@/content/not-found";
import wiki from "@/content/wiki";
import discord from "@/content/discord";

export default function NotFound() {
  return (
    <>
      <section className="mb-16">
        <Logo width={180} height={98} />
      </section>
      <section className="mb-24 sm:mb-28">
        <Jumbotron
          data={content}
          buttonStyle="blue"
          classBigImage="transform scale-75 lg:scale-90 -translate-y-5 lg:-translate-y-8"
          classSmallImage="transform scale-100 sm:scale-115 sm:-translate-y-12"
        />
      </section>
      <section id="action" className="mb-20 sm:mb-28">
        <ContactCard className="w-full" data={contact} />
        <div className="md:flex md:items-stretch">
          <DiscordCard
            className="w-full md:w-1/2 md:mr-4 mt-6 sm:mt-8"
            data={discord}
          />
          <WikiCard
            className="w-full md:w-1/2 md:ml-4 mt-6 sm:mt-8"
            data={wiki.card}
          />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
