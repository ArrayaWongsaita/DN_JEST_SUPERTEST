import { addItem, getItems, getTotal, clearCart } from "./cart";




describe('cart', () => {

//    beforeEach(() => {
//     })
afterEach(() => {
        clearCart()
    });
  

    test('add item', () => {
        addItem({name: "ยาสีฟัน", price: 100})
        expect(getItems()).toEqual([{name: "ยาสีฟัน", price: 100}])
    });

    
    test('add item', () => {
        addItem({name: "ยาสีฟัน", price: 100})
        expect(getItems()).toEqual([{name: "ยาสีฟัน", price: 100}])
    });



    test('get item', () => {
        expect(getItems()).toEqual([])
    });
    
})



describe('group --- 2 ', () => {

    beforeAll(() => {
        addItem({name: "ยาสีฟัน", price: 100})
    });
       test('add item', () => {
        expect(getItems()).toEqual([{name: "ยาสีฟัน", price: 100}])
    });

    test('add item', () => {
        expect(getItems()).toEqual([{name: "ยาสีฟัน", price: 100}])
    });
})