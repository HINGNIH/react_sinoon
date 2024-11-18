
import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/cartdata';

const initialState = {
    products: productData,
    carts:[],
    cartTotal:0,
    selected : false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart:(state, action) =>{
            // state.carts.push(action.payload)
            const existingItem = state.carts.find(item => item.id === action.payload.id);
            if (existingItem) {
                // 이미 장바구니에 있으면 수량만 증가
                existingItem.quantity += 1;
            } else {
                // 새로 장바구니에 추가, quantity를 1로 설정
                state.carts.push({ ...action.payload, quantity: 1 });
            }
           
        },
        removeCart:(state, action)=>{
            state.carts = state.carts.filter((item)=>item.id !==action.payload)
            
        },
         // 장바구니 수량 증가
         increaseQuantity: (state, action) => {
            const item = state.carts.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },

        // 장바구니 수량 감소
        decreaseQuantity: (state, action) => {
            const item = state.carts.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        totalCart:(state, action)=>{
            // state.cartTotal=state.carts.reduce((acc,curr)=>acc+ curr.price, 0)
            state.cartTotal = state.carts.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        },
        emptyCart:(state, action)=>{
            state.carts=[];
        },
        
        //상품정렬 : product page
        sortCart:(state, action)=>{
            if (action.payload !== '') {
                state.products = [...state.products].sort((a, b) =>
                    a[action.payload] > b[action.payload] ? 1 : -1
                );
            }
        },
        //상품정렬초기화
        resetCart : (state) =>{
            state.products = productData;
        },
        //상품 검색
        searchCart : (state, action) =>{
           state.products = productData.filter((item) =>
            item.title.toLowerCase().includes(action.payload.toLowerCase()) ||  // 상품명 필드 추가
            item.category.toLowerCase().includes(action.payload.toLowerCase()) // 기존 카테고리 검색 유지
        )},
        //상품선택하기 
        toggleSelectItem: (state, action) => {
            const item = state.carts.find(cart => cart.id === action.payload);
            if (item) item.selected = !item.selected;
          },
        //전체선택
        selectAllItems: (state, action) => {
            state.carts.forEach(item => {
              item.selected = action.payload;
            });
        },
        //선택된 상품만 한번에 삭제하기 
        removeSelectedItems: (state) => {
            state.carts = state.carts.filter(item => !item.selected);
          },
    },
});

export const { 
    addCart, 
    removeCart, 
    increaseQuantity,
    decreaseQuantity,
    totalCart, 
    emptyCart, 
    sortCart, 
    searchCart, 
    resetCart,
    toggleSelectItem,
    selectAllItems,
    removeSelectedItems
} = cartSlice.actions;
export default cartSlice.reducer;

