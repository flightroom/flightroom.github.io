import { WaitingListForm } from "./WaitingListForm";

export function WaitingListSection() {
  return (
    <>
    <div id="join-the-waiting-list"></div>
    <div className="text-center px-4 mb-15">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        Join the newsletter
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Product news, new releases and guides on building and shipping apps and AI agents with Flightroom.
      </p>
      <div className="max-w-2xl mx-auto">
        <WaitingListForm />
      </div>
    </div>
    </>
  );
}
