import Link from "next/link";

const ulStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em"
}

const headerStyle = {
    display: "inline-block",
    marginRight: "2em",
    fontFamily: "Arial"
}

const linkStyle = {
    display: "inline-block",
    marginRight: "1em",
    fontFamily: "Arial",
}

const liStyle = {
    display: "inline-block",
    marginRight: "1em",
}

const Header = props => (
	<div>
        <ul style={ulStyle} >
            <li style={headerStyle} >
                <h2 className="head" >THE CELLAR</h2>
            </li>
            <li style={liStyle} >
                <Link href="/">
                    <a style={linkStyle}>View Wines</a>
                </Link>
                <Link href="/addWine">
                    <a style={linkStyle}>Add New Wine</a>
                </Link>
            </li>
        </ul>
	</div>
)

export default Header

