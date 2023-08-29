import contactUS from "../../images/contactUS.jpeg";

const Contact = () => {
  return (
    <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-9/12  h-[350px] m-36  ">
      <div className="m-4  relative overflow-hidden bg-cover bg-no-repeat ">
        <img
          className=" mt-4 rounded-t-lg w-[600px] h-[300px]"
          src={contactUS}
        ></img>
      </div>
      <div className="mt-6 flex-col justify-start p-8">
        <h1 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          You are in Contact Page
        </h1>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  );
};

export default Contact;
