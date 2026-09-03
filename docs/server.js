const express = require('express');
const cors = require('cors');
const { YooCheckout } = require('@a2seven/yoo-checkout');

const app = express();
app.use(express.json());
app.use(cors());

// Инициализация ЮKassa через переменные окружения Render
const checkout = new YooCheckout({ 
    shopId: process.env.SHOP_ID || 'test_shop_id', 
    secretKey: process.env.SECRET_KEY || 'test_secret_key' 
});

// Маршрут для создания платежа
app.post('/create-payment', async (req, res) => {
    try {
        const { amount } = req.body;
        
        const payment = await checkout.createPayment({
            amount: {
                value: amount.toFixed(2),
                currency: 'RUB'
            },
            payment_method_data: {
                type: 'bank_card'
            },
            confirmation: {
                type: 'redirect',
                return_url: 'https://github.com' // Сюда вернет после оплаты (потом заменим на твой сайт)
            },
            capture: true,
            description: 'Пополнение кошелька на Школьном Блоге'
        });

        res.json({ confirmationUrl: payment.confirmation.confirmation_url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка создания платежа' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});