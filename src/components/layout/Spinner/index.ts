import Component from './component';

export interface Props {
    text?: string;
    size?: Sizes;
    color?: Colors;
    position?: Positions;
}

export enum Positions {
    Absolute = 'absolute',
    Relative = 'relative',
}

export enum Colors {
    Primary = 'primary',
    White = 'white',
}

export enum Sizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

Component.defaultProps = {
    text: null,
    size: Sizes.Medium,
    color: Colors.Primary,
    position: Positions.Absolute,
};

export default Component;