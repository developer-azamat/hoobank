export interface IFeed {
    id: string;
    content: string;
    name: string;
    title: string;
    img: string;
}

export interface IClient {
    id: string;
    logo: string;
}

interface ILinks {
    name: string;
    link: string;
}

export interface IFootLinks{
    title: string;
    links: ILinks[]
}