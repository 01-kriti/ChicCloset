   // Initialize cart count
   let cartCount = 0;

   // Function to add item to the cart
   function addToCart() {
       const productName = "Ethnovog";  // Replace with dynamic name based on the product
       const productSize = document.querySelector('input[name="size"]:checked') ? document.querySelector('input[name="size"]:checked').nextElementSibling.innerText : null;
       const productPrice = "₹2,940";  // Replace with dynamic price based on the product
   
       if (productSize) {
           // Create new product object
           const newItem = {
               name: productName,
               size: productSize,
               price: productPrice
           };
   
           // Get existing cart items from localStorage
           let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   
           // Add item to cart array
           cartItems.push(newItem);
   
           // Update localStorage with new cart data
           localStorage.setItem('cart', JSON.stringify(cartItems));
   
           // Update cart count
           cartCount = cartItems.length;
           document.getElementById('cartCount').innerText = cartCount;
   
           // Show success message
           const successMessage = document.createElement("div");
           successMessage.className = "alert alert-success";
           successMessage.style.position = "fixed";
           successMessage.style.bottom = "20px";
           successMessage.style.right = "20px";
           successMessage.innerText = `${productName} added to cart!`;
           document.body.appendChild(successMessage);
   
           // Auto-remove success message after 3 seconds
           setTimeout(() => {
               successMessage.remove();
           }, 3000);
   
           // Update cart sidebar with the latest items
           updateCartSidebar(cartItems);
       } else {
           alert("Please select a size before adding to the cart.");
       }
   }
   
   // Function to update the cart sidebar
   function updateCartSidebar(cartItems) {
       const cartItemsList = document.getElementById("cartItemsList");
       cartItemsList.innerHTML = ''; // Clear previous items
   
       // Add each cart item to the sidebar
       cartItems.forEach((item, index) => {
           const li = document.createElement("li");
           li.classList.add("cart-item");
           li.innerHTML = `
       <div class="d-flex justify-content-between align-items-center mb-2">
           <div>
               <h6 class="mb-1">${item.name}</h6>
               <p class="mb-1">Size: ${item.size}</p>
               <p>Price: ${item.price}</p>
           </div>
           <div class="d-flex gap-2">
               <!-- Buy Now Button -->
               <button class="btn btn-success btn-sm" onclick="buyNow(${index}); removeItem(${index})">Buy Now</button>
                   
               <!-- Remove from Cart Button -->
               <button class="btn btn-danger btn-sm mt-5" onclick="removeItem(${index})">Remove</button>
           </div>
       </div>
   `;
   
   
   
           cartItemsList.appendChild(li);
       });
   
       // Update cart count in the navbar
       document.getElementById("cartCount").textContent = cartItems.length;
   }
   function buyNow(index) {
       const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
       const item = cartItems[index];
   
       // Display confirmation message
       const confirmationMessage = document.createElement("div");
       confirmationMessage.className = "alert alert-success";
       confirmationMessage.style.position = "fixed";
       confirmationMessage.style.bottom = "20px";
       confirmationMessage.style.right = "20px";
       confirmationMessage.style.zIndex = "10000"; // Ensures the message is above other elements
       confirmationMessage.innerText = `${item.name} has been purchased successfully!`;
       document.body.appendChild(confirmationMessage);
   
       // Auto-remove confirmation message after 3 seconds
       setTimeout(() => {
           confirmationMessage.remove();
       }, 3000);
   }
   
   
   // Function to remove item from the cart
   function removeItem(index) {
       // Get cart items from localStorage
       let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   
       // Remove the item at the specified index
       cartItems.splice(index, 1);
   
       // Update localStorage with the new cart data
       localStorage.setItem('cart', JSON.stringify(cartItems));
   
       // Update the sidebar and cart count
       updateCartSidebar(cartItems);
       document.getElementById("cartCount").textContent = cartItems.length;
   }
   
   // Toggle the cart sidebar visibility
   function toggleCartSidebar() {
       const sidebar = document.getElementById("cartSidebar");
       sidebar.classList.toggle("show");
   }
   
   function closeCartSidebar() {
       const sidebar = document.getElementById("cartSidebar");
       sidebar.classList.remove("show");  // Assuming "show" is used to display the sidebar
   }
   
   
   
   // Function to clear the cart
   function clearCart() {
       // Clear cart data from localStorage
       localStorage.removeItem('cart');
   
       // Clear the sidebar and update the cart count
       updateCartSidebar([]);
       document.getElementById("cartCount").textContent = 0;
   }
   
   // Initialize the cart on page load
   window.onload = function() {
       // Get existing cart items from localStorage
       let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   
       // Update the cart count
       cartCount = cartItems.length;
       document.getElementById('cartCount').innerText = cartCount;
   
       // Update the cart sidebar with current cart data
       updateCartSidebar(cartItems);
   }