export const AllEvents = () => {
  return (
    <section id="events" className="wrapper my-8 flex flex-col md:gap-12">
      <h2 className="h2-bold">
        Trusted by
        <br />
        housands of Events:{' '}
      </h2>
      <div className="flex w-full flex-col items-center gap-5 md:flex-row md:justify-around">
        <span className="w-fit">Search Input</span>
        <span className="w-fit">Filter Input</span>
      </div>
    </section>
  );
};
