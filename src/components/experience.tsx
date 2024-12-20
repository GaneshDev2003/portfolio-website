export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-6 md:pb-12 lg:pb-16 xl:pb-24"
    >
      <div className="container px-4 md:px-6 py-12 md:py-18">
        <h1 className="inline text-5xl font-bold">Experience</h1>
        <h1 className="inline text-5xl font-bold text-primary">.</h1>
      </div>
      <div className="container ">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm leading-none font-semibold text-primary/75">
              May 2024 - Aug 2024
            </time>
            <h3 className="text-lg font-semibold">
              AI Research Intern - Fujitsu Research
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Worked on question-answering systems using LLMs for table-text sources.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm leading-none font-semibold text-primary/75">
              Feb 2024 - Mar 2024
            </time>
            <h3 className="text-lg font-semibold">
              AI Engineer Intern - Sarvam.ai
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Worked on LLM agents. Benchmarked and tested various open souce
              LLMs on their function-calling abilities.
            </p>
          </li>
         
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-semibold leading-none text-primary/75">
              May 2023 - Jul 2023
            </time>
            <h3 className="text-lg font-semibold">
              Software Developer Intern - Standard Chartered
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Worked alongside the Data Analytics Team at Standard Chartered on
              a migration automation project.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
