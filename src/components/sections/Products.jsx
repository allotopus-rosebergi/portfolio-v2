import { ReactComponent as DoorSvg } from '../../assets/svg/door_colored.svg';
import {potato_range} from "../../constants/index.jsx";

function Products() {
    return (
        <section id="sorten">
            <div className="my-8 sm:my-16 mx-8 sm:mx-16">
                <div className=" border-b-[1px] border-t-[1px] border-taubengrau py-8">
                    <h2 className="text-start sm:text-center leading-none"> Unsere Sorten </h2>
                    <p className="text-start sm:text-center"> Bei uns finden Sie für jedes Gericht die
                        passenden Erdäpfel! </p>
                </div>


                <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-y-32 sm:gap-y-48 mt-32 `}>
                    {potato_range.map((potato) => (
                        <div className="w-full flex flex-col items-center relative" key={potato.id}>
                            <p className="cursive_highlight absolute -top-12">{potato.special}</p>
                            <h3>{potato.name}</h3>
                            <p>{potato.characteristics}</p>

                            <div className="relative w-5/6 sm:w-4/6 my-6 sm:mt-6 object-center">
                                <DoorSvg className="w-2/3 opacity-65 m-auto" />
                                <img
                                    src={potato.img}
                                    alt={potato.name}
                                    className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:drop-shadow-xl"
                                />
                            </div>

                            <p className="w-5/6 sm:w-2/5">{potato.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products