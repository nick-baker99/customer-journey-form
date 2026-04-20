// Implement your success page here
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col gap-4 grow justify-center items-center text-center pt-2 pb-10 px-6">
      <Image 
        src="/check-circle.svg"
        alt="success tick"
        width={150}
        height={150}
      />
      <h1 className="text-xl sm:text-2xl text-green-600 font-semibold">You have successfully been registered to MovieGeek!</h1>
      <p className="text-base text-neutral-900 font-medium mb-2">Welcome to MovieGeek! Start exploring, rating, and reviewing your favourite films.</p>
      <button type="button" className="btn btn-primary">Sign In Now</button>
    </main>
  );
}