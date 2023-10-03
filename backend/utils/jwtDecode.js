// Define the JWT authentication strategy
const jwtAuthStrategy = {
    key: 'sysnovare-secret', // Replace with your actual secret key
    validate: async (decoded, request, h) => {
      try {
        // Check if the user exists in the database
        const user = await User.findById(decoded.userId);
  
        if (!user) {
          return { isValid: false };
        }
  
        // You can add more validation logic here if needed
  
        return { isValid: true, credentials: user }; // Attach user data to request.auth.credentials
      } catch (error) {
        console.error('Error validating JWT:', error);
        return { isValid: false };
      }
    },
    verify: {
      options: {
        algorithms: ['HS256'],
        audience: 'your-audience', // Replace with your expected audience
      },
      decode: (request) => {
        const token = request.auth.token;
        const decoded = Jwt.decode(token);
        return decoded;
      },
    },
  };
  
  module.exports = jwtAuthStrategy;
  