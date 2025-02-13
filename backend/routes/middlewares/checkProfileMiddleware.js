const User = require('../../models/user');

const checkProfileMiddleware = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!user.isProfileSet) {
            return res.status(403).json({ 
                message: "Complete your profile before booking", 
            });
        }
        next(); 
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = checkProfileMiddleware;
