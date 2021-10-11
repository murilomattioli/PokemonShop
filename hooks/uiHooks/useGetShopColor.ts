import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";

export type ShopTypes = 'Water' | 'Fire' | 'Grass' | 'Electric' | 'Psychic' | 'Dark';
export const SHOP_COLORS: Array<ShopTypes> = ['Water', 'Fire', 'Grass', 'Electric', 'Psychic', 'Dark'];

type ReturnProps = [() => ShopTypes | undefined]

export default (): ReturnProps => {
  const router = useRouter();
  
  const handleShopColor = useCallback((): ShopTypes | undefined => {
    const shopColor = <ShopTypes>`${router.basePath}`.replace('/', '').replace('Shop', '');
    const isValidShopColor = SHOP_COLORS.includes(shopColor);
    if (isValidShopColor) {
      return shopColor;
    };
  }, [router]);

  return [handleShopColor];
};
