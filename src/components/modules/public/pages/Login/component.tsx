import { NextPage } from 'next';

import { Props } from './index';

import StyledComponent from './styles';
import Head from 'components/layout/Head';
import PageContainer from 'components/layout/PageContainer';
import SectionLogin from './sections/Login';

const PublicPageHome: NextPage<Props> = ({ data, state }) => {
    return (
        <StyledComponent className="public-page-login">
            <Head {...data.meta} />
            <PageContainer>
                <SectionLogin {...data.content.login} />
            </PageContainer>
        </StyledComponent>
    );
};

export default PublicPageHome;
