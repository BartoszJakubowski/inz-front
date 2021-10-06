import Component from './component';

export interface Props {
    headline?: string;
}

Component.defaultProps = {
    headline: 'Brak wyników',
};
export default Component;