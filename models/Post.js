import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required'] 
    },
    enrollmentNo: { 
        type: String, 
        required: [true, 'Enrollment number is required'],
        unique: true
    },
    department: { 
        type: String, 
        required: [true, 'Department is required'] 
    },
    batch: { 
        type: String, 
        required: [true, 'Batch is required'] 
    },
    contactNumber: { 
        type: String 
      },
      category: { 
       
        type: String,
        // enum: ['Singing', 'Dancing', 'Painting', 'Gaming', 'Standup', 'Others'],
        required: [true, 'Category is required']


      },
      talentMedia: { 
        type: String //images or videos 
      },
      socialMediaLinks: {
        type: String,
       
      },
      description: { 
        type: String, 
        required: [true, 'Description is required'] 
    },
    studentPhoto: { 
        type: String, 
        required: [true, 'Student photo is required'] 
      }
    }, 
    { 
      timestamps: true 
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
