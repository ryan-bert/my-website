export default function ProfileCard() {
  return (
    <div className="flex flex-col p-8 items-center w-[400px] rounded-xl bg-secondary">
        <div className="pb-8">
            <img src="me.jpg" alt="Display Photo" />
        </div>
        <h2 className="font-alpha text-3xl">Ryan Bertschinger</h2>
    </div>
  );
}