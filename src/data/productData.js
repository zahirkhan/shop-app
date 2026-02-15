// Product categories
const categories = {
    SMARTPHONES: 'Smartphones',
    LAPTOPS: 'Laptops',
    ACCESSORIES: 'Accessories',
    AUDIO: 'Audio',
    GAMING: 'Gaming',
    WEARABLES: 'Wearables'
};

// Brands
const brands = {
    smartphones: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'OPPO', 'Vivo', 'Realme'],
    laptops: ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI', 'Razer'],
    accessories: ['Anker', 'Belkin', 'Logitech', 'UGREEN', 'Spigen', 'AUKEY', 'RAVPower', 'Baseus'],
    audio: ['Sony', 'Bose', 'JBL', 'Sennheiser', 'Apple', 'Samsung', 'Jabra', 'Audio-Technica'],
    gaming: ['Razer', 'Logitech', 'SteelSeries', 'Corsair', 'HyperX', 'ASUS ROG', 'MSI', 'NZXT'],
    wearables: ['Apple', 'Samsung', 'Fitbit', 'Garmin', 'Xiaomi', 'Huawei', 'OPPO', 'OnePlus']
};

// Product templates
const productTemplates = {
    smartphones: [
        '{brand} Ultra Smartphone',
        '{brand} Pro Max',
        '{brand} Smart X',
        '{brand} Mobile Plus'
    ],
    laptops: [
        '{brand} Laptop Pro',
        '{brand} Notebook Max',
        '{brand} UltraBook X',
        '{brand} Gaming Laptop'
    ],
    accessories: [
        '{brand} Fast Charger',
        '{brand} USB-C Cable',
        '{brand} Wireless Charger',
        '{brand} Power Bank',
        '{brand} Phone Case',
        '{brand} Screen Protector',
        '{brand} Car Mount',
        '{brand} Desk Stand'
    ],
    audio: [
        '{brand} Wireless Earbuds',
        '{brand} Over-Ear Headphones',
        '{brand} Gaming Headset',
        '{brand} Bluetooth Speaker',
        '{brand} True Wireless Earphones',
        '{brand} Noise-Cancelling Headphones'
    ],
    gaming: [
        '{brand} Gaming Mouse',
        '{brand} Mechanical Keyboard',
        '{brand} Gaming Headset',
        '{brand} Gaming Controller',
        '{brand} RGB Mouse Pad',
        '{brand} Gaming Chair'
    ],
    wearables: [
        '{brand} Smartwatch Pro',
        '{brand} Fitness Tracker',
        '{brand} Smart Band',
        '{brand} Health Watch'
    ]
};

// Random helper
function getRandomPrice(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Product description generator
function generateDescription(category, brand, name) {
    const features = {
        smartphones: ['5G capable', '120Hz AMOLED', 'AI-powered camera', 'Fast charging', 'Water resistant'],
        laptops: ['SSD storage', 'High-performance CPU', 'Dedicated GPU', 'Long battery life', 'Premium build'],
        accessories: ['Fast charging', 'Durable design', 'Premium materials', 'Compact size', 'Universal compatibility'],
        audio: ['Active noise cancellation', 'Premium sound', 'Long battery life', 'Water resistant', 'Touch controls'],
        gaming: ['RGB lighting', 'Customizable buttons', 'Premium build', 'Ergonomic design', 'High precision'],
        wearables: ['Heart rate monitor', 'Sleep tracking', 'Water resistant', 'Long battery life', 'GPS enabled']
    };
    const randomFeatures = features[category].sort(() => 0.5 - Math.random()).slice(0, 3);
    return `${name} by ${brand}. Features: ${randomFeatures.join(', ')}. Premium quality for optimal performance.`;
}

// Working Unsplash images per category
const demoImages = {
    smartphones: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1549921296-3a8efc77b5e2?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=500&fit=crop'
    ],
    laptops: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop'
    ],
    accessories: [
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1608164415250-7d9a3cd0d3f8?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1625799406018-c558d83f5b51?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop'
    ],
    audio: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1518441902117-67f7f8f6bcd8?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=500&fit=crop'
    ],
    gaming: [
        'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=500&h=500&fit=crop'
    ],
    wearables: [
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1511732351661-5f3b6c8e5c9b?w=500&h=500&fit=crop'
    ]
};

// Return image for product
function getImage(category, index) {
    const images = demoImages[category.toLowerCase()] || demoImages.accessories;
    return images[index % images.length];
}

// Shuffle array helper
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Pre-shuffle images for each category
const shuffledImages = {};
Object.keys(demoImages).forEach(category => {
    shuffledImages[category] = shuffleArray(demoImages[category]);
});

// Get a random image without repeating consecutively
const lastUsedIndex = {};
function getRandomUniqueImage(category) {
    const images = shuffledImages[category.toLowerCase()] || shuffledImages.accessories;
    let index = Math.floor(Math.random() * images.length);

    // Avoid consecutive repeats
    if (lastUsedIndex[category] === index) {
        index = (index + 1) % images.length;
    }
    lastUsedIndex[category] = index;
    return images[index];
}

// Generate products with unique/randomized images
function generateProducts(count = 1000) {
    const products = [];
    const categoryList = Object.keys(productTemplates);

    for (let i = 0; i < count; i++) {
        const category = getRandomElement(categoryList);
        const brand = getRandomElement(brands[category]);
        const template = getRandomElement(productTemplates[category]);
        const name = template.replace('{brand}', brand);

        let price;
        switch (category) {
            case 'smartphones': price = getRandomPrice(299, 1499); break;
            case 'laptops': price = getRandomPrice(499, 2999); break;
            case 'accessories': price = getRandomPrice(9.99, 99.99); break;
            case 'audio': price = getRandomPrice(29.99, 399.99); break;
            case 'gaming': price = getRandomPrice(49.99, 499.99); break;
            case 'wearables': price = getRandomPrice(49.99, 699.99); break;
            default: price = getRandomPrice(29.99, 999.99);
        }

        products.push({
            id: i + 1,
            name,
            brand,
            category,
            price,
            description: generateDescription(category, brand, name),
            imgUrl: getRandomUniqueImage(category),
            rating: Number((3 + Math.random() * 2).toFixed(1)),
            stock: Math.floor(Math.random() * 100) + 1,
            createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString()
        });
    }

    return products;
}

export { categories as productCategories, brands as productBrands, generateProducts };
