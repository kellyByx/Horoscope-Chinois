function SigneChinois({ nom, image, description }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  text-white ">
      <div className=" m-4 p-4 border-4 border-double h-96 overflow-auto rounded-lg  bg-red-600  ">

        <img className="border-double border-gray-500 rounded-full h-65 w-65 " src={`img/${image}`} alt={`${nom} et ideogramme`} />
        <h2 className="text-center font-bold uppercase bg-black rounded-lg"> {nom} </h2>
        <br />
        <h3> Description: </h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
export default SigneChinois;
