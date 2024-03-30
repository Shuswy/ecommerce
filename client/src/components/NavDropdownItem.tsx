import React from 'react';

type NavContent = {
    title: string,
    links: string[];
};

type NavProp = {
    navProp: NavContent[]
}


const NavDropdownItem: React.FC<NavProp> = ({navProp }) => {

    return (
        <div className='flex flex-row w-full justify-center bg-primary shadow-lg mt-6'>
            {navProp.map((section, index) => (
                <div key={index} className="w-[300px] p-4">
                    <div className="font-bold">{section.title}</div>
                    <ul className="list-none">
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex} className="cursor-pointer mt-1 text-gray-500 hover:text-black">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default NavDropdownItem;
