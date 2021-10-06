import Component from './component';

export interface Props {
    children: any;
    type?: ButtonTypes;
    element?: ButtonElements;
    className?: string;
    onClick?: Function;
    href?: string;
    icon?: {
        type: ButtonIconTypes;
        value: any;
    };
    disabled?: boolean;
    size?: ButtonSizes;
    style?: ButtonStyles;
    variant?: ButtonVariants;
    layout?: ButtonLayouts;
    loading?: boolean;
    confirm?: {
        enabled: boolean;
        message?: string;
    };
    copy?: {
        enabled: boolean;
        content: string;
    }
    buttonProps?: any;
    shadow?: {
        enabled: boolean;
        style?: object;
    };
    selected?: boolean;
}

export enum ButtonTypes {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

export enum ButtonElements {
    Button = 'button',
    Anchor = 'anchor',
}

export enum ButtonStyles {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
    Light = 'light',
    Dark = 'dark',
    None = 'none',
    RedFilled = 'red-filled',
    DarkTransparent = 'dark-transparent',
    RedTransparent = 'red-transparent',
    Gradient = 'gradient',
    GradientDark = 'gradient-dark',
}

export enum ButtonVariants {
    Primary = 'primary',
    Outline = 'outline',
}

export enum ButtonLayouts {
    Default = 'default',
    Wide = 'wide',
    Block = 'block',
    Small = 'small',
    MediumWidth = 'medium-width',
}

export enum ButtonSizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export enum ButtonIconTypes {
    Image = 'image',
    Element = 'element',
}

export interface ListProps extends Props {
    key: string;
}

Component.defaultProps = {
    element: ButtonElements.Button,
    style: ButtonStyles.Primary,
    variant: ButtonVariants.Primary,
    size: ButtonSizes.Medium,
    layout: ButtonLayouts.Default,
    className: '',
    onClick: null,
    type: ButtonTypes.Button,
    disabled: false,
    loading: false,
    confirm: null,
    copy: null,
    href: null,
    buttonProps: {},
    shadow: null,
    icon: null,
};

export default Component;