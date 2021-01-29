import { ComponentType, ReactElement as ElementType, SVGProps, ReactSVGElement } from 'react';
import { CSSObject } from '@emotion/serialize';

import { colors, spacing } from '../theme';
import { CommonProps, GroupTypeBase, OptionTypeBase } from '../types';

// ==============================
// Dropdown & Clear Icons
// ==============================

export function CrossIcon(props?: SVGProps<SVGElement>): ReactSVGElement;
export function DownChevron(props?: SVGProps<SVGElement>): ReactSVGElement;

// ==============================
// Dropdown & Clear Buttons
// ==============================

export type IndicatorProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & {
    /** The children to be rendered inside the indicator. */
    children: ElementType;
    /** Props that will be passed on to the children. */
    innerProps: any;
    /** The focused state of the select. */
    isFocused: boolean;
    /** Whether the text is right to left */
    isRtl: boolean;
    /** Whether the component is disabled */
    isDisabled: boolean;
};

export type baseCSS = (props: IndicatorProps<any, boolean>) => CSSObject;

export const dropdownIndicatorCSS: baseCSS;
export const DropdownIndicator: ComponentType<IndicatorProps<any, boolean>>;

export const clearIndicatorCSS: baseCSS;
export const ClearIndicator: ComponentType<IndicatorProps<any, boolean>>;

// ==============================
// Separator
// ==============================

export interface SeparatorState {
    isDisabled: boolean;
}

export function indicatorSeparatorCSS(state: SeparatorState): CSSObject;

export const IndicatorSeparator: ComponentType<IndicatorProps<any, boolean>>;

// ==============================
// Loading
// ==============================

export function loadingIndicatorCSS(state: { isFocused: boolean; size: number }): CSSObject;

/** @deprecated Use `LoadingIndicatorProps` instead. */
export type LoadingIconProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = {
    /** Props that will be passed on to the children. */
    innerProps: any;
    /** The focused state of the select. */
    isFocused: boolean;
    /** Whether the text is right to left */
    isRtl: boolean;
} & CommonProps<OptionType, IsMulti, GroupType> & {
        /** Set size of the container. */
        size: number;
    };

export type LoadingIndicatorProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = {
    /** Props that will be passed on to the children. */
    innerProps: any;
    /** The focused state of the select. */
    isFocused: boolean;
    /** Whether the text is right to left */
    isRtl: boolean;
} & CommonProps<OptionType, IsMulti, GroupType> & {
        /** Set size of the container. */
        size: number;
    };

export const LoadingIndicator: ComponentType<LoadingIconProps<any, boolean>>;
// TODO LoadingIndicator.defaultProps: { size: number };
