import { NextPage } from 'next';

import { Props } from './index';

import StyledComponent from './styles';
import Head from 'components/layout/Head';
import PageContainer from 'components/layout/PageContainer';
import SectionHero from './sections/Hero';

const PublicPageHome: NextPage<Props> = ({ data, state }) => {
    return (
        <StyledComponent className="public-page-home">
            <Head {...data.meta} />
            <PageContainer>
                <SectionHero {...data.content.hero} />
            </PageContainer>
        </StyledComponent>
    );
};

export default PublicPageHome;
