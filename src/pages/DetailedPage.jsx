import { commands } from "../constants/commands.data";
import Cards from "../components/Cards";
import { chips } from "../constants/chips";

const DetailedPage = () => {
  return (
    <div className=" text-gray-200 min-h-dvh">
      <section className="w-full py-12">
        <div className="space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="lg:text-3xl text-xl font-bold tracking-tighter sm:text-5xl">
                Find the Commands You Need
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Search our database of commands and get the information you need
                to get started.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-3xl">
            <form className="flex items-center gap-2">
              <input
                className=" h-10 placeholder:bg-[#010536] bg-[#010536] px-3 placeholder:w-full w-full rounded-md placeholder:px-3 placeholder:py-6 py-6 text-sm focus:bg-[#010536] focus:px-3 focus:border-[#010536]"
                placeholder="Search commands"
                type="search"
              />
              <button
                className="inline-flex items-center text-[#010536] bg-[#ffff00] hover:bg-[#ffff00]/90 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-4"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="flex justify-center gap-2">
           {chips.map((chip,index) => (
             <div key={index} className="relative cursor-pointer grid select-none items-center whitespace-nowrap rounded-xl hoverTransition bg-gradient-to-tr opacity-70 hover:opacity-100 from-[#01053687] via-[#131743cc] to-[#26294bcc] py-2 px-4 font-sans text-sm tracking-wider font-bold text-gray-300">
             <span className="">{chip}</span>
           </div>
           ))}  
    
          </div>

          <div className="xl:mx-36 sm:mx-10 mx-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {commands.map((card) => (
              <Cards key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedPage;
