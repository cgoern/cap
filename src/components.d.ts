/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FamilyType, LineHeightTypes, ScaleType, WeightType } from "./shared/types";
import { SizeTypes } from "./components/cap-rich-text/types";
import { HeadingTypes, SizeTypes as SizeTypes1 } from "./components/cap-text/types";
export namespace Components {
    interface CapRichText {
        /**
          * Description...
         */
        "family": FamilyType;
        /**
          * Description...
         */
        "lineHeight": LineHeightTypes;
        /**
          * Description...
         */
        "scale": ScaleType;
        /**
          * Description...
         */
        "size": SizeTypes;
        /**
          * Description...
         */
        "weight": WeightType;
    }
    interface CapText {
        /**
          * Description...
         */
        "ellipsis": boolean;
        /**
          * Description...
         */
        "family": FamilyType;
        /**
          * Description...
         */
        "heading": HeadingTypes;
        /**
          * Description...
         */
        "lineHeight": LineHeightTypes;
        /**
          * Description...
         */
        "noWrap": boolean;
        /**
          * Description...
         */
        "paragraph": boolean;
        /**
          * Description...
         */
        "scale": ScaleType;
        /**
          * Description...
         */
        "size": SizeTypes;
        /**
          * Description...
         */
        "textAfter": string;
        /**
          * Description...
         */
        "textBefore": string;
        /**
          * Description...
         */
        "weight": WeightType;
    }
}
declare global {
    interface HTMLCapRichTextElement extends Components.CapRichText, HTMLStencilElement {
    }
    var HTMLCapRichTextElement: {
        prototype: HTMLCapRichTextElement;
        new (): HTMLCapRichTextElement;
    };
    interface HTMLCapTextElement extends Components.CapText, HTMLStencilElement {
    }
    var HTMLCapTextElement: {
        prototype: HTMLCapTextElement;
        new (): HTMLCapTextElement;
    };
    interface HTMLElementTagNameMap {
        "cap-rich-text": HTMLCapRichTextElement;
        "cap-text": HTMLCapTextElement;
    }
}
declare namespace LocalJSX {
    interface CapRichText {
        /**
          * Description...
         */
        "family"?: FamilyType;
        /**
          * Description...
         */
        "lineHeight"?: LineHeightTypes;
        /**
          * Description...
         */
        "scale"?: ScaleType;
        /**
          * Description...
         */
        "size"?: SizeTypes;
        /**
          * Description...
         */
        "weight"?: WeightType;
    }
    interface CapText {
        /**
          * Description...
         */
        "ellipsis"?: boolean;
        /**
          * Description...
         */
        "family"?: FamilyType;
        /**
          * Description...
         */
        "heading"?: HeadingTypes;
        /**
          * Description...
         */
        "lineHeight"?: LineHeightTypes;
        /**
          * Description...
         */
        "noWrap"?: boolean;
        /**
          * Description...
         */
        "paragraph"?: boolean;
        /**
          * Description...
         */
        "scale"?: ScaleType;
        /**
          * Description...
         */
        "size"?: SizeTypes;
        /**
          * Description...
         */
        "textAfter"?: string;
        /**
          * Description...
         */
        "textBefore"?: string;
        /**
          * Description...
         */
        "weight"?: WeightType;
    }
    interface IntrinsicElements {
        "cap-rich-text": CapRichText;
        "cap-text": CapText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cap-rich-text": LocalJSX.CapRichText & JSXBase.HTMLAttributes<HTMLCapRichTextElement>;
            "cap-text": LocalJSX.CapText & JSXBase.HTMLAttributes<HTMLCapTextElement>;
        }
    }
}
