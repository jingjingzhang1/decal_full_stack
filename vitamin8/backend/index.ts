import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongo = require('mongoose');
mongo.connect('mongodb+srv://user_me:1234567890@berkeleydecalfullstack.3hd0k.mongodb.net/?retryWrites=true&w=majority&appName=BerkeleyDecalFullStack', {
    useNewUrlParser: true,
    useUnifiedTopology: true});

const taskSchema = new mongoose.Schema({
  task: String,
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks.map((task) => task.task));
});

app.post('/api/tasks', async (req, res) => {
  const newTask = new Task({ task: req.body.task });
  await newTask.save();
  const tasks = await Task.find();
  res.json(tasks.map((task) => task.task));
});

app.delete('/api/tasks/:task', async (req, res) => {
  await Task.deleteOne({ task: req.params.task });
  const tasks = await Task.find();
  res.json(tasks.map((task) => task.task));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:5000`);
});
