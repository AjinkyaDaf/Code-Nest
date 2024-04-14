import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import OpenAI from "openai";
import path from 'path';
const __dirname = path.resolve();

import mongoose from 'mongoose';
import User from './models/User.js';
import Question from './models/Question.js';
// import Resume from './models/Resume.js';

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().single('image')); // Handle file uploads
app.use(cors());





const connectMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URL);

  if (connection) {
    console.log('Connected to MongoDB');
  }
}
connectMongoDB();


const projectSchema = new mongoose.Schema({
  projectName: String,
  ownerName: String,
  description: String,
  codeLink: String,
  demoLink: String,
});

const Project = mongoose.model('Project', projectSchema);

app.post('/api/projects', async (req, res) => {
  try {
    const {
      projectName,
      ownerName,
      description,
      codeLink,
      demoLink,
    } = req.body;

    const project = new Project({
      projectName,
      ownerName,
      description,
      codeLink,
      demoLink,
    });


    await project.save();
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding data:', error.message);
    res.status(500).json({ message: 'Data adding failed' });
  }
});





// ...

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    res.status(500).json({ message: 'Error fetching projects' });
  }
})
  .post(async (req, res) => {
    try {
      const {
        projectName,
        ownerName,
        description,
        codeLink,
        demoLink,
      } = req.body;

      const project = new Project({
        projectName,
        ownerName,
        description,
        codeLink,
        demoLink,
      });

      await project.save();
      res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
      console.error('Error adding data:', error.message);
      res.status(500).json({ message: 'Data adding failed' });
    }
  });

// ...
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chatbot', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt in the request body' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "assistant", content: prompt }],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const assistantMessage = response.choices[0].message;
    const Answer = assistantMessage.content;

    res.send({ Answer });

    // res.send(response.data);
    // console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/signup", async(req, res)=>{
  const {username, email, password} = req.body;

  const user = new User({
    username: username,
    email: email,
    password: password
  });

  try{
    const savedUser = await user.save();

    return res.json({
      success: true,
      data: savedUser,
      message: "User registered successfully"
    })
  }
  catch(e){
    return res.json({
      success: false,
      message: e.message
    })
  }
})

app.post("/login", async(req, res)=>{
  const {email, password} = req.body;

  const user = await User.findOne({email: email, password: password});

  if(user){
    return res.json({
      success: true,
      data: user,
      message: "User logged in successfully"
    })
  }
  else
  {
    return res.json({
      success: false,
      message: "Invalid email or password"
    })
  }
})

// API endpoint to post questions
app.post('/api/questions', async (req, res) => {
  const { title, description } = req.body;

  try {
    const newQuestion = new Question({ title, description });
    await newQuestion.save();
    res.json({ message: 'Question posted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error posting question' });
  }
});

// Get all questions (for fetching data to display on community page)
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 }); // Get questions sorted by creation date (descending)
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

// Server >> index.js

// Update question by ID
app.put('/api/questions/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(id, { title, description }, { new: true });
    res.json(updatedQuestion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating question' });
  }
});

// Delete question by ID
app.delete('/api/questions/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Question.findByIdAndDelete(id);
    res.json({ message: 'Question deleted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting question' });
  }
});

// Add API endpoints for comments
// Add comment to question by ID
app.post('/api/questions/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { user, content } = req.body;

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(id, {
      $push: { comments: { user, content } }
    }, { new: true });
    res.json(updatedQuestion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding comment' });
  }
});


// Delete comment of question by ID
app.delete('/api/questions/:questionId/comments/:commentId', async (req, res) => {
  const { questionId, commentId } = req.params;

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(questionId, {
      $pull: { comments: { _id: commentId } }
    }, { new: true });
    res.json(updatedQuestion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting comment' });
  }
});

// Endpoint to post resume data
app.post('/api/resumes', async (req, res) => {
  try {
    const {
      personalInformation,
      professionalExperience,
      educationalBackground,
      skills,
      interestsAndHobbies,
      certifications,
    } = req.body;

    const resume = new Resume({
      personalInformation,
      professionalExperience,
      educationalBackground,
      skills,
      interestsAndHobbies,
      certifications,
    });

    await resume.save();
    res.status(201).json({ message: 'Resume data added successfully' });
  } catch (error) {
    console.error('Error adding resume data:', error.message);
    res.status(500).json({ message: 'Failed to add resume data' });
  }
});


// Endpoint to fetch all resumes
app.get('/api/resumes', async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    console.error('Error fetching resumes:', error.message);
    res.status(500).json({ message: 'Failed to fetch resumes' });
  }
});



// Mongoose Schema
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const FormModel = mongoose.model('Form', FormSchema);


app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFormEntry = new FormModel({
      name,
      email,
      message
    });
    await newFormEntry.save();
    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form entry:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// Define schema and model for newsletter subscription
const newsletterSchema = new mongoose.Schema({
  email: String,
  timestamp: { type: Date, default: Date.now }
});
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// API endpoint for subscribing to the newsletter
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create new subscriber
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    return res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});





if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});


