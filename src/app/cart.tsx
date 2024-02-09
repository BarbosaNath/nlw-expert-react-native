import Header from "@/components/header";
import { View, Text } from "react-native";
import { Product } from "@/components/product";

import { useCartStore } from "@/store/cart-store";

export default function Cart() {
  const cartStore = useCartStore();

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      {cartStore.products.length > 0 ? (
        <View className="p-5 flex-1">
          {cartStore.products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </View>
      ) : (
        <Text className="font-body text-slate-400 text-center my-8">
          Seu carrinho está vazio.
        </Text>
      )}
    </View>
  );
}
