import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import classnames from 'classnames';

import { Props, Ranges } from './index';

import { HOURS_IN_MONTH } from 'consts/dates';

import { round } from 'utils/math';

import StyledComponent from './styles';
import Button, { ButtonStyles } from 'components/layout/Button';
import Input from 'components/layout/forms/Input';
import Slider from 'components/layout/forms/Slider';

interface SectionValueObjects {
    [key: string]: SectionValueObject;
}

interface SectionValueObject {
    value: number;
    pricePerHour: number;
    pricePerMonth: number;
}

const LayoutCalculator: FunctionComponent<Props> = ({ ranges, summary, sections }) => {
    const [range, setRange]: [Ranges, Function] = useState(null);
    const [valueObject, setValueObject]: [SectionValueObjects, Function] = useState({});

    const totalPrice = round(
        Object
            .keys(valueObject)
            .reduce((previousValue: number, valueObjectKey: string) => {
                const nextValueObject = valueObject[valueObjectKey];
                const price = range === Ranges.Hours 
                    ? nextValueObject?.pricePerHour 
                    : nextValueObject?.pricePerMonth;
                return previousValue + price;
            }, 0), 
        range === Ranges.Month ? 2 : 3
    );

    useEffect(() => setRange(Ranges.Month), []);

    useEffect(() => {
        let nextValueObject = {};
        sections.forEach(section => {
            section.subSections.forEach(subSection => {
                nextValueObject = updateValueObject(nextValueObject, section, subSection, subSection.defaultValue);
            });
        });

        setValueObject(nextValueObject)
    }, [sections]);

    const updateValueObject = (valueObject: any, section: any, subSection: any, nextValue: number = null): any => {
        const valueKey = `${section.key}-${subSection.key}`;
        const nextValueObject = { ...valueObject };

        if(!nextValueObject[valueKey]) {
            nextValueObject[valueKey] = {
                value: 0,
                pricePerHour: 0,
                pricePerMonth: 0,
            }
        }

        return {
            ...nextValueObject,
            [valueKey]: {
                ...nextValueObject[valueKey],
                value: nextValue,
                pricePerHour: round(nextValue * subSection.pricePerHour, 3),
                pricePerMonth: round(nextValue * (subSection.pricePerHour * HOURS_IN_MONTH), 3),
            },
        };
    }

    return (
        <StyledComponent
            className="layout-calculator"
        >
            <div className="col col-left">
                <div className="range-switch-controls">
                    <Button 
                        className={classnames(
                            'range-switch-control',
                            'range-switch-control-month',
                            { active: range === Ranges.Month },
                            { unactive: range !== Ranges.Month },
                        )}
                        onClick={() => setRange(Ranges.Month)}
                        style={range === Ranges.Month && ButtonStyles.Primary || ButtonStyles.Light}
                        shadow={{ enabled: range === Ranges.Month && true || false }}
                    >
                        {ranges.month}
                    </Button>
                    <Button 
                        className={classnames(
                            'range-switch-control',
                            'range-switch-control-hours',
                            { active: range === Ranges.Hours },
                            { unactive: range !== Ranges.Hours },
                        )}
                        onClick={() => setRange(Ranges.Hours)}
                        style={range === Ranges.Hours && ButtonStyles.Primary || ButtonStyles.Light}
                        shadow={{ enabled: range === Ranges.Hours && true || false }}
                    >
                        {ranges.hour}
                    </Button>
                </div>
                <div className="calculator-sections">
                    {sections.map(section => (
                        <div 
                            key={section.key}
                            className="calculator-section"
                        >
                            <h5 
                                className="calculator-section-title" 
                                dangerouslySetInnerHTML={{ __html: section.label}} 
                            />
                            <div className="calculator-section-subsections">
                                {section.subSections.map(subSection => {
                                    const valueKey = `${section.key}-${subSection.key}`;
                                    const valueSubsectionObject = valueObject[valueKey];
                                    const value = valueSubsectionObject?.value || 0;

                                    return (
                                        <div 
                                            key={subSection.key}
                                            className="calculator-section-subsection"
                                        >
                                            <div className="calculator-section-subsection-header">
                                                <h5 
                                                    className="calculator-section-subsection-header-title" 
                                                    dangerouslySetInnerHTML={{ __html: `${subSection.label} 13zł x`}} 
                                                />
                                                <div className="calculator-section-subsection-header-price-input">
                                                    <Input 
                                                        name={`input-${subSection.key}`}
                                                        type="number"
                                                        onChange={(event: ChangeEvent<HTMLInputElement>) => setValueObject({
                                                            ...valueObject,
                                                            ...updateValueObject(valueObject, section, subSection, Math.round(parseFloat(event.target.value))),
                                                        })}
                                                        value={value}
                                                        spinButtons={{
                                                            visible: true,
                                                        }}
                                                        inputProps={{
                                                            min: subSection.min,
                                                            max: subSection.max,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="calculator-section-subsection-slider">
                                                <Slider 
                                                    name={`slider-${subSection.key}`}
                                                    value={value}
                                                    onChange={(value: number) => setValueObject({
                                                        ...valueObject,
                                                        ...updateValueObject(valueObject, section, subSection, value),
                                                    })}
                                                    sliderProps={{
                                                        min: subSection.min,
                                                        max: subSection.max,
                                                    }}
                                                    legend={{
                                                        enabled: true,
                                                        min: subSection.min,
                                                        max: subSection.max,
                                                        unit: subSection.unit,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col col-right">
                <div className="calculator-summary">
                    <div className="calculator-summary-body">
                        <h5 
                            className="calculator-summary-title"
                            dangerouslySetInnerHTML={{ __html: summary.title }}
                        />
                        <div className="calculator-summary-block">
                            <div className="calculator-summary-row">
                                <div 
                                    className="calculator-summary-col calculator-summary-col-label"
                                    dangerouslySetInnerHTML={{ __html: summary.rangeLabel }} 
                                />
                                <div className="calculator-summary-col calculator-summary-col-value">
                                    {range === Ranges.Month ? ranges.month : ranges.hour}
                                </div>
                            </div>
                        </div>
                        <div className="calculator-summary-body">
                            {sections.map(section => (
                                <div 
                                    key={section.key}
                                    className="calculator-summary-block"
                                >
                                    <h5 
                                        className="calculator-summary-block-title"
                                        dangerouslySetInnerHTML={{ __html: section.label }}
                                    />
                                    {section.subSections.map(subSection => {
                                        const valueKey = `${section.key}-${subSection.key}`;
                                        const valueSubsectionObject = valueObject[valueKey];
                                        const value = valueSubsectionObject?.value || 0;
                                        const price = range === Ranges.Hours 
                                            ? valueSubsectionObject?.pricePerHour 
                                            : valueSubsectionObject?.pricePerMonth;

                                        return (
                                            <div 
                                                key={subSection.key}
                                                className="calculator-summary-row"
                                            >
                                                <div 
                                                    className="calculator-summary-col calculator-summary-col-label"
                                                    dangerouslySetInnerHTML={{ __html: `<b>${subSection.label}</b> ${subSection.pricePerHour}x${value}`}} 
                                                />
                                                <div 
                                                    className="calculator-summary-col calculator-summary-col-value"
                                                >
                                                    {price} zł
                                                </div>
                                            </div>
                                        )
                                    })} 
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="calculator-summary-checkout">
                        <h4 className="calculator-summary-checkout-price">
                            {summary.priceLabel}
                            <br/>
                            <span className="calculator-summary-checkout-price-value">{totalPrice} zł</span>
                            <br/>
                            /{range === Ranges.Month ? summary.ranges.month : summary.ranges.hour}
                        </h4>
                        <div className="calculator-summary-checkout-controls">
                            {summary.buttons.map(button => (
                                <Button
                                    key={button.key}
                                    className="calculator-summary-checkout-control"
                                    {...button}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="box-shadow" />
            </div>
        </StyledComponent>
    )
};

export default LayoutCalculator;