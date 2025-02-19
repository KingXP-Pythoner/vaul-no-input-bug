import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';

interface WithFadeFromProps {
    snapPoints: (number | string)[];
    fadeFromIndex: number;
}
interface WithoutFadeFromProps {
    snapPoints?: (number | string)[];
    fadeFromIndex?: never;
}
type DialogProps = {
    activeSnapPoint?: number | string | null;
    setActiveSnapPoint?: (snapPoint: number | string | null) => void;
    children?: React.ReactNode;
    open?: boolean;
    closeThreshold?: number;
    onOpenChange?: (open: boolean) => void;
    shouldScaleBackground?: boolean;
    scrollLockTimeout?: number;
    fixed?: boolean;
    dismissible?: boolean;
    onDrag?: (event: React.PointerEvent<HTMLDivElement>, percentageDragged: number) => void;
    onRelease?: (event: React.PointerEvent<HTMLDivElement>, open: boolean) => void;
    modal?: boolean;
    nested?: boolean;
    onClose?: () => void;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    preventScrollRestoration?: boolean;
} & (WithFadeFromProps | WithoutFadeFromProps);
declare function Root({ open: openProp, onOpenChange, children, shouldScaleBackground, onDrag: onDragProp, onRelease: onReleaseProp, snapPoints, nested, closeThreshold, scrollLockTimeout, dismissible, fadeFromIndex, activeSnapPoint: activeSnapPointProp, setActiveSnapPoint: setActiveSnapPointProp, fixed, modal, onClose, direction, preventScrollRestoration, }: DialogProps): any;
declare function NestedRoot({ onDrag, onOpenChange, ...rest }: DialogProps): any;
declare const Drawer: {
    Root: typeof Root;
    NestedRoot: typeof NestedRoot;
    Content: any;
    Overlay: any;
    Trigger: React.ForwardRefExoticComponent<any>;
    Portal: React.FC<DialogPrimitive.DialogPortalProps>;
    Close: React.ForwardRefExoticComponent<any>;
    Title: React.ForwardRefExoticComponent<any>;
    Description: React.ForwardRefExoticComponent<any>;
};

export { Drawer };
