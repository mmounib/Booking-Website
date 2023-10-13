import { IoIosAddCircle } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { AiOutlineWifi, AiOutlineCloudUpload } from "react-icons/ai";

const Places = () => {
  const { action } = useParams();

  return (
    <section className="h-screen mt-10">
      {action !== "new" ? (
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center mt-8">
            <Link to={"/account/Places/new"}>
              <button
                type="submit"
                className=" border-primary border-2 rounded-[5px] py-4 px-5 text-primary flex items-center gap-6 capitalize font-bold"
              >
                <IoIosAddCircle size={30} className="text-primary" />
                add new place
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="">
          <form className="flex shadow-pink-300 shadow-inner rounded-[10px] py-8 mt-12 mx-auto flex-col gap-8 w-[600px]">
            <div className=" flex flex-col mx-12">
              <label htmlFor="">Title</label>
              <input
                type="text"
                placeholder="Your Place's Title"
                className="mx-0"
              />
            </div>
            <div className="flex flex-col mx-12">
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Your Address" className="mx-0" />
            </div>
            <div className="flex flex-col mx-12">
              <label htmlFor="">Photos</label>
              <div className="flex gap-3 items-center mt-2 py-4 px-2 max-w-[200px] bg-primary rounded-[10px] text-white">
                <AiOutlineCloudUpload size={25} className="text-white" />
                <span className="text-base">Add from your device</span>
              </div>
            </div>
            <div className="flex flex-col mx-12">
              <label htmlFor="">Description</label>
              <textarea className="border-gray-300 border-[1px] min-h-[150px] mt-2"></textarea>
            </div>
            <div className="flex flex-col mx-12">
              <label htmlFor="">Perks</label>
              <div className="flex justify-between flex-wrap mt-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="mx-2"/>
                  <div className="flex flex-col gap-1">
                    <AiOutlineWifi size={25} />
                    <span className="text-lg">Wifi</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="mx-2"/>
                  <div className="flex flex-col gap-1">
                    <AiOutlineWifi size={25} />
                    <span className="text-lg">Wifi</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="mx-2"/>
                  <div className="flex flex-col gap-1">
                    <AiOutlineWifi size={25} />
                    <span className="text-lg">Wifi</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="mx-2"/>
                  <div className="flex flex-col gap-1">
                    <AiOutlineWifi size={25} />
                    <span className="text-lg">Wifi</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="mx-2"/>
                  <div className="flex flex-col gap-1">
                    <AiOutlineWifi size={25} />
                    <span className="text-lg">Wifi</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Places;
