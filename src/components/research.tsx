export default function Research() {
    return (
      <section
        id="research"
        className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 pb-6 md:pb-12 lg:pb-16 xl:pb-24"
      >
        <div className="container px-4 md:px-6 py-12 md:py-18">
          <h1 className="inline text-5xl font-bold">Research</h1>
          <h1 className="inline text-5xl font-bold text-primary">.</h1>
        </div>
        <div className="container">
          <div className="mb-10 ms-4">
            <h3 className="text-lg font-semibold">
              Master Thesis - Deployability of LLM designed Rewards for Restless Multi Armed Bandits
            </h3>
            <p className="text-md font-semibold">Advisor: Prof. Balaraman Ravindran</p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Collaborating with Google DeepMind (Prof. Milind Tambe and Dr. Aparna Taneja) to analyze impact of multinguality on fairness and performance of LLMs in the context of bandit problems.
            </p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Publication under review at an A* conference workshop.
            </p>
          </div>
          <div className="mb-10 ms-4">
            <h3 className="text-lg font-semibold">
              Fujitsu Research - Question-answering systems using LLMs
            </h3>
            <p className="text-md font-semibold">Guides: Ankush Agarwal, Pranoy Panda and Chaitanya Devaguptapu</p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Worked on increasing efficiency and accuracy of question-answering systems using LLMs for table-text sources.
            </p>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Publication under review at an A* workshop.
            </p>
          </div>
        </div>
      </section>
    );
  }