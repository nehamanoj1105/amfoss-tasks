document.addEventListener("DOMContentLoaded", () => {
    const productCatalog = document.querySelector('.product-catalog');
    const terminalOutput = document.querySelector('.terminal-output');
    const terminalInput = document.querySelector('input[type="text"]');

    let products = [];
    let cart = [];

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            products = data;
            renderProductCatalog(products);
        });

    function renderProductCatalog(products) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.classList.add('product-image');

            const productDetails = document.createElement('div');
            productDetails.classList.add('product-details');

            const productTitle = document.createElement('div');
            productTitle.classList.add('product-item-title');
            productTitle.textContent = `${product.title} (ID: ${product.id})`;

            const productPrice = document.createElement('div');
            productPrice.classList.add('product-item-price');
            productPrice.textContent = `$${product.price.toFixed(2)}`;

            productDetails.appendChild(productTitle);
            productDetails.appendChild(productPrice);
            productItem.appendChild(productImage);
            productItem.appendChild(productDetails);

            productCatalog.appendChild(productItem);
        });
    }

    terminalInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            handleInput(command);
        }
    });

    function handleInput(command) {
        const [action, arg] = command.split(' ');

        switch (action) {
            case 'list':
                listProducts();
                break;
            case 'details':
                viewProductDetails(arg);
                break;
            case 'add':
                addToCart(arg);
                break;
            case 'remove':
                removeFromCart(arg);
                break;
            case 'cart':
                viewCart();
                break;
            case 'buy':
                buyProducts();
                break;
            case 'clear':
                clearTerminal();
                break;
            case 'search':
                searchProduct(arg);
                break;
            case 'sort':
                sortProducts(arg);
                break;
            default:
                terminalOutput.textContent += `Invalid command: ${command}\n`;
                break;
        }

        terminalInput.value = '';
    }


    function listProducts() {
        terminalOutput.textContent += 'Available Products:\n';
        products.forEach(product => {
            terminalOutput.textContent += `${product.title} (ID: ${product.id}) - $${product.price.toFixed(2)}\n`;
        });
    }

    function viewProductDetails(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
            terminalOutput.textContent += `\nProduct Details (ID: ${product.id}):\n`;
            terminalOutput.textContent += `Title: ${product.title}\n`;
            terminalOutput.textContent += `Price: $${product.price.toFixed(2)}\n`;
            terminalOutput.textContent += `Description: ${product.description}\n`;
            terminalOutput.textContent += `Category: ${product.category}\n`;
        } else {
            terminalOutput.textContent += `Product with ID ${productId} not found.\n`;
        }
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
            cart.push(product);
            terminalOutput.textContent += `Added ${product.title} (ID: ${product.id}) to cart.\n`;
        } else {
            terminalOutput.textContent += `Product with ID ${productId} not found.\n`;
        }
    }

    function removeFromCart(productId) {
        const productIndex = cart.findIndex(p => p.id === parseInt(productId));
        if (productIndex !== -1) {
            const removedProduct = cart.splice(productIndex, 1)[0];
            terminalOutput.textContent += `Removed ${removedProduct.title} (ID: ${removedProduct.id}) from cart.\n`;
        } else {
            terminalOutput.textContent += `Product with ID ${productId} not found in cart.\n`;
        }
    }

    function viewCart() {
        if (cart.length === 0) {
            terminalOutput.textContent += 'Your cart is empty.\n';
        } else {
            terminalOutput.textContent += 'Your Cart:\n';
            cart.forEach(product => {
                terminalOutput.textContent += `${product.title} (ID: ${product.id}) - $${product.price.toFixed(2)}\n`;
            });
        }
    }

    function buyProducts() {
        if (cart.length === 0) {
            terminalOutput.textContent += 'Your cart is empty. Add products to cart before buying.\n';
        } else {
            let total = 0;
            terminalOutput.textContent += '\nPurchase Summary:\n';
            cart.forEach(product => {
                total += product.price;
                terminalOutput.textContent += `${product.title} (ID: ${product.id}) - $${product.price.toFixed(2)}\n`;
            });
            terminalOutput.textContent += `Total: $${total.toFixed(2)}\n`;
            terminalOutput.textContent += 'Thank you for your purchase!\n';
            cart = [];
        }
    }

    function clearTerminal() {
        terminalOutput.textContent = '';
    }

    function searchProduct(productName) {
        const searchResults = products.filter(product =>
            product.title.toLowerCase().includes(productName.toLowerCase())
        );
        if (searchResults.length > 0) {
            terminalOutput.textContent += 'Search Results:\n';
            searchResults.forEach(product => {
                terminalOutput.textContent += `${product.title} (ID: ${product.id}) - $${product.price.toFixed(2)}\n`;
            });
        } else {
            terminalOutput.textContent += `No products found matching "${productName}".\n`;
        }
    }

    function sortProducts(criteria) {
        if (criteria === 'price') {
            products.sort((a, b) => a.price - b.price);
        } else if (criteria === 'name') {
            products.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            terminalOutput.textContent += 'Invalid sort criteria. Use "price" or "name".\n';
            return;
        }
        terminalOutput.textContent += `Products sorted by ${criteria}.\n`;
        listProducts(); 
    }
});
