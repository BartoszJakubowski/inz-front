import { Props as NavSectionProps } from 'components/layout/NavSection';

export interface Navigation {
    topLeft: NavSectionProps;
    topRight: NavSectionProps;
    main: NavSectionProps;
    side: NavSectionProps;
    footerAddress: any;
    footerContact: any;
    footerAbout: any;
    footerServices: any;
    footerTerms: any;
    footerSocials: any;
    topbarDark: boolean;
}

export interface Page<PageContent> {
    meta: Meta;
    content: PageContent;
}

export interface Meta {
    title: string;
    description: string;
    keywords?: string;
    canonical: string;
}