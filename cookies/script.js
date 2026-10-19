const cart = [];

const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.<br>Que tal escolher um cookie?</p>';
    cartTotal.textContent = money(0);
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <small>${item.qty} × ${money(item.price)}</small>
      </div>
      <div>
        <strong>${money(item.price * item.qty)}</strong>
        <button class="remove-item" data-index="${index}">remover</button>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotal.textContent = money(total);

  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.index), 1);
      renderCart();
    });
  });
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
  cartPanel.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("show");
  cartPanel.setAttribute("aria-hidden", "true");
}

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const existing = cart.find(item => item.name === name);

    if (existing) existing.qty++;
    else cart.push({ name, price, qty: 1 });

    renderCart();
    openCart();
  });
});

document.getElementById("checkout").addEventListener("click", () => {
  if (!cart.length) {
    alert("Seu carrinho está vazio! Escolha um cookie primeiro 🍪");
    return;
  }
  alert("Pedido registrado para o projeto! 🍪✨\n\nAqui vocês podem futuramente conectar um formulário, WhatsApp ou sistema de pagamento.");
});

renderCart();
