import Link from "next/link";

const style = {
    //backgroundColor: "red"
}

const Header = props => (
	<div>
        <ul>
            <li><h2>The Cellar</h2></li>
            <li>
                <Link href="/">
                    <a style={style}>HOME</a>
                </Link>
                <Link href="/help">
                    <a style={style}>HELP</a>
                </Link>
            </li>
        </ul>
	</div>
)

export default Header

