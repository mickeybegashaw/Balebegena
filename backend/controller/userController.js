import User from "../model/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const createToken = (_id)=>{
  return jwt.sign({_id},process.env.JWTSECRATEKEY , { expiresIn : "10d"} )
}

const register= async (req,res)=>{
  try {
    const { firstName, lastName , email , password } =req.body
    //all field validation
    if (!(firstName && lastName && email && password)) {
      return res.status(400).json("All fields are required")
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json("Invalid email format")
    }
    


    //already exist validator 
    const emailAlreadyExists = await User.findOne({email})
    if (emailAlreadyExists) {
      return res.status(400).json("User Already exists with this Email")
    }
    //encrypt pass
    const encPassword = await bcrypt.hash(password, 10)
    //save db
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: encPassword
    })
    
    const token = createToken(user._id)

    res.status(200).json( {email , token })

  } catch (error) {
    console.log(error)
  }
  
}


const logIn= async (req,res)=>{
  try {

    const { email , password } =req.body
    //all field validation
    if (!(email && password)) {
      return res.status(400).json("All fields are required")
    }

    const user = await User.findOne({email})
    if (!user) {
      return res.status(400).json("Invalid Email")
    }
    //match pass
    const much = await bcrypt.compare(password , user.password )
    if (!much) {
      return res.status(400).json("Incorrect password")
    }

    //send token
    if ( user && much ) {
      const token = createToken(user._id)
      return res.status(200).json({email, token})
    }

  } catch (error) {
    console.log(error)
  }
}

export { register , logIn }