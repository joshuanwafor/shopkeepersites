declare module "iconsax-react" {
  import { FC, SVGAttributes } from "react";
  export interface IconProps extends SVGAttributes<SVGElement> {
    variant?: "Linear" | "Outline" | "Broken" | "Bold" | "Bulk" | "TwoTone";
    color?: string;
    size?: string | number;
  }
  export type Icon = FC<IconProps>;
  export const InfoCircle: Icon;
  export const ShoppingCart: Icon;
}
