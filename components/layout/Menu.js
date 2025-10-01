import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children"><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li className="menu-item-has-children"><Link href="/service">Services</Link></li>
                <li className="menu-item-has-children"><Link href="/blog-details">Projects</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li>
                    <a 
                        href="/Ocean-View- Brochure.pdf" 
                        className="download-btn theme-btn"
                        download
                    >
                        <span>Download Brochure</span>
                    </a>
                </li>
            </ul>

            <style jsx>{`
                .download-btn span{
                    display: inline-block;
                    background: #E5A53B;
                    color: white;
                    padding: 5px 5px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: background 0.3s ease;
                    margin-left: 10px;
                }

                .download-btn span:hover {
                    background: #f5ac35ff;
                    padding: 5px 5px;
                    border-radius: 5px;
                }
            `}</style>
        </>
    )
}