import Link from "next/link";

const Links = () => {
    const links = [
        {
            title : "Achievements",
            url : "/Achievements/akademik",
        },
        {
            title : "Project",
            url : "/Project",
        },
        {
            title : "CV",
            url : "/CV",
        },
        {
            title : "Contact",
            url : "/Contact",
        },
    ];

    return (
        <div className="flex space-x-10 flex">
            {links.map((link => (
                <Link href={link.url} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links;