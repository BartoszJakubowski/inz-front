import { NextPage } from 'next';

import { Props } from './index';

import StyledComponent from './styles';
import Head from 'components/layout/Head';
import PageContainer from 'components/layout/PageContainer';
import SectionRegister from './sections/Register';

const PublicPageHome: NextPage<Props> = ({ data, state }) => {
    return (
        <StyledComponent className="public-page-register">
            <Head {...data.meta} />
            <PageContainer>
                <SectionRegister {...data.content.register} />
            </PageContainer>
        </StyledComponent>
    );
};

export default PublicPageHome;
