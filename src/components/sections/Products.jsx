import { ReactComponent as DoorSvg } from '../../assets/svg/door_colored.svg';

function Products() {
    return (
        <section id="sorten">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-14 hidden">
                <DoorSvg className="w-full opacity-80"/>
                <DoorSvg className="w-full opacity-80"/>
                <DoorSvg className="w-full opacity-80"/>
                <DoorSvg className="w-full opacity-80"/>
            </div>
        </section>
    )
}

export default Products