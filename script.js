// ���ﳵ����
let cart = [];
// ���ﳵ��Ʒ����Ԫ��
const cartCountElement = document.getElementById('cart-count');
// ���ﳵģ̬��
const cartModal = document.getElementById('cart-modal');
// ���ﳵ��Ʒ�б�Ԫ��
const cartItemsElement = document.getElementById('cart-items');
// ���ﳵ�ܼ�Ԫ��
const cartTotalElement = document.getElementById('cart-total');

// �����Ʒ�����ﳵ
function addToCart(productId) {
    // ��ʾ���������Ʒ��Ϣ����
    let product;
    if (productId === 1) {
        product = { id: 1, name: 'Product 1', price: 19.99 };
    } else if (productId === 2) {
        product = { id: 2, name: 'Product 2', price: 29.99 };
    }

    // �����Ʒ�Ƿ����ڹ��ﳵ��
    let existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    // ���¹��ﳵ������ʾ
    updateCartCount();
    // ���¹��ﳵ������ʾ
    updateCartItems();
}

// ���¹��ﳵ������ʾ
function updateCartCount() {
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = count;
}

// ���¹��ﳵ������ʾ
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

// �򿪹��ﳵģ̬��
function openCartModal() {
    cartModal.style.display = 'block';
}

// �رչ��ﳵģ̬��
function closeCartModal() {
    cartModal.style.display = 'none';
}

// ���˹���
function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    updateCartItems();
    closeCartModal();
}

// ������ﳵͼ���ģ̬��
document.querySelector('.cart-icon').addEventListener('click', openCartModal);
// ����رհ�ť�ر�ģ̬��
document.querySelector('.close').addEventListener('click', closeCartModal);
// ���ģ̬���ⲿ�ر�ģ̬��
window.addEventListener('click', function (event) {
    if (event.target == cartModal) {
        closeCartModal();
    }
});