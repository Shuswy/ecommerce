type NavContent = {
    title: string,
    links: string[];
};

type NavProp = {
    navProp: NavContent[];
}

const navData: NavProp = {
    navProp: [
        {
            title: 'Featured',
            links: [
                'Shop All New Arrivals',
                'Best Sellers',
                'Member Shop'
            ]
        },
        {
            title: 'Shop Icons',
            links: [
                'Air Force 1',
                'Air Jordan 1',
                'Air Max',
                'Mercurial'
            ]
        },
        {
            title: 'Discover Sport',
            links: [
                'Football',
                'Running',
                'Basketball'
            ]
        },
        {
            title: 'Trending',
            links: [
                'Fleece',
                'Air Max'
            ]
        }
    ]
};

export default navData;
