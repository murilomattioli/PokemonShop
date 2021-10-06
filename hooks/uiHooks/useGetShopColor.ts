import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";

export type ShopColorNames = 'Water';
export const SHOP_COLORS: Array<ShopColorNames> = ['Water'];

type ReturnProps = [() => ShopColorNames | undefined]

export default (): ReturnProps => {
  const router = useRouter();
  
  const handleShopColor = useCallback((): ShopColorNames | undefined => {
    const shopColor = <ShopColorNames>`${router.basePath}`.replace('/', '').replace('Shop', '');
    const isValidShopColor = SHOP_COLORS.includes(shopColor);
    if (isValidShopColor) {
      return shopColor;
    };
  }, [router]);


  return [handleShopColor];
};
