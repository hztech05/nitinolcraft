// 购物车数组
let cart = [];
// 购物车商品数量元素
const cartCountElement = document.getElementById('cart-count');
// 购物车模态框
const cartModal = document.getElementById('cart-modal');
// 购物车商品列表元素
const cartItemsElement = document.getElementById('cart-items');
// 购物车总价元素
const cartTotalElement = document.getElementById('cart-total');

// 添加商品到购物车
function addToCart(productId) {
    // 简单示例，假设产品信息如下
    let product;
    if (productId === 1) {
        product = { id: 1, name: 'Product 1', price: 19.99 };
    } else if (productId === 2) {
        product = { id: 2, name: 'Product 2', price: 29.99 };
    }

    // 检查商品是否已在购物车中
    let existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    // 更新购物车数量显示
    updateCartCount();
    // 更新购物车内容显示
    updateCartItems();
}

// 更新购物车数量显示
function updateCartCount() {
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = count;
}

// 更新购物车内容显示
function updateCartItems() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// 打开购物车模态框
function openCartModal() {
    cartModal.style.display = 'block';
}

// 关闭购物车模态框
function closeCartModal() {
    cartModal.style.display = 'none';
}

// 结账功能
function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    updateCartItems();
    closeCartModal();
}

// 点击购物车图标打开模态框
document.querySelector('.cart-icon').addEventListener('click', openCartModal);
// 点击关闭按钮关闭模态框
document.querySelector('.close').addEventListener('click', closeCartModal);
// 点击模态框外部关闭模态框
window.addEventListener('click', function (event) {
    if (event.target == cartModal) {
        closeCartModal();
    }
});