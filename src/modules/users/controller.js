import User from './model';

export const loginWithAuth0 = async (req, res) => {
  console.log('/src/modules/users/controller',req.body);
  const { ...args} = req.body;
  try { const user=await User.create(args);
       return res.status(200).json({user});
       }
  catch(e){ return res.status(400).json({ error: true, errorMessage: 'something wrong with auth' });
            }
 }
