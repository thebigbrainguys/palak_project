export default function handler(req, res) {
    try {
        if (req.method === 'GET') {
            // Clear the JWT cookie
            res.setHeader(
                'Set-Cookie',
                'token=; HttpOnly; Max-Age=0; SameSite=Strict; Path=/'
              );
        
            return res.status(200).json({ message: 'Logout successful' });
        }
        else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
  }