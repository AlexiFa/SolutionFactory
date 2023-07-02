import Address from '../models/Address.js';

export const createAddress = async (req, res) => {
    try {
        const address = await Address.create(req.body);
        res.json({ success: true, message: 'Address created successfully', address });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
