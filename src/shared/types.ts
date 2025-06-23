// export enum SelectedPage {
//     Home = "home",
//     Benefits = "benefits",
//     OurClasses = "ourclasses",
//     ContactUs = "contactus"
// }
export const SelectedPage = {
    Home: "home",
    Benefits: "benefits",
    OurClasses: "ourclasses",
    ContactUs: "contactus"
} as const;

export type SelectedPage = typeof SelectedPage[keyof typeof SelectedPage];

export interface BenefitType {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}