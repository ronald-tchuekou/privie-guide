import { GetTheGuide } from "@src/components/get-the-guide";
import { NavBar } from "@src/components/navbar";
import { PageTitle } from "@src/components/page-title";
import { WhyIsImportant } from "@src/components/why-is-important";

export default function Home() {
  return (
    <main className="">
      <header className="w-full border-b">
        <NavBar />
      </header>

      <section className="w-full py-8 lg:py-14">
        <div className="w-full max-w-screen-xl flex justify-center items-center py-5 px-3 sm:px-6 mx-auto">
          <PageTitle />
        </div>
      </section>

      <section id="get-it" className="w-full">
        <div className="w-full max-w-screen-xl flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 py-5 px-3 sm:px-6 mx-auto">
          <WhyIsImportant />
          <GetTheGuide />
        </div>
      </section>

      <div className="h-10"></div>
      <footer className="w-full border-t">
        <div className="w-full max-w-screen-xl flex justify-center items-center py-5 px-3 sm:px-6 mx-auto">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} - Tous droits réservés
          </p>
        </div>
      </footer>
    </main>
  );
}
