import { Navlink } from "rect-router-dom"

export default function Header(){
    return(
        <div>
            <ul className="flex gap-15 text-2xl justyfy-centr">
                <Navlink to="/simple">Simple Bookmarking</Navlink>
                <Navlink to="/search">Speedy Searching</Navlink>
                <Navlink to="/share">Easy Sharing</Navlink>
            </ul>
        </div>
    )
}