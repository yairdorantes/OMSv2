import { create } from "zustand";

const useStore = create((set) => {
  console.log("contexts");
  return {
    codeScanned: "",
    setCodeScanned: (code) => set({ codeScanned: code }),
    itemData: {},
    setItemData: (itemInfo) => set({ itemData: itemInfo }),
    // items list for handle worksheet's products/items picking
  };
});

export default useStore;
