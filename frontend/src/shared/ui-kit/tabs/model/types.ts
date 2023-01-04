export type TabsProps = {
    options: TabOptions;
}

export type TabOptions = TabItem[];

type TabItem = {
    title: string;
    link: string;
}


export type TStyledLink = {
    isActive: boolean;
}
