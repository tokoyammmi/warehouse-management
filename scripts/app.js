// Мокові дані
const products = [
    { name: "Чайник", quantity: 50, warehouse: "Склад A" },
    { name: "Мікрохвильовка", quantity: 30, warehouse: "Склад B" }
  ];
  
  // Заповнення таблиці
  document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#products-table tbody');
    products.forEach(product => {
      const row = `
        <tr>
          <td>${product.name}</td>
          <td>${product.quantity}</td>
          <td>${product.warehouse}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  });